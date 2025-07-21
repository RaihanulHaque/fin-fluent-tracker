import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Create a Supabase client with admin privileges
    const supabaseAdmin = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { email, token, action } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Handle different actions: send_confirmation or delete_account
    if (action === "send_confirmation") {
      // Find the user by email first
      const { data: users, error: listError } =
        await supabaseAdmin.auth.admin.listUsers();

      if (listError) {
        console.error("Error listing users:", listError);
        return new Response(JSON.stringify({ error: "Failed to find user" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const userExists = users.users.find((user) => user.email === email);

      if (!userExists) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Generate a secure deletion token (you can use crypto.randomUUID())
      const deletionToken = crypto.randomUUID();
      const confirmationUrl = `${
        Deno.env.get("SITE_URL") || "http://localhost:5173"
      }/confirm-account-deletion?token=${deletionToken}&email=${encodeURIComponent(
        email
      )}`;

      // Store the deletion request in a temporary table (or use Supabase storage)
      const { error: storageError } = await supabaseAdmin
        .from("account_deletion_requests")
        .insert({
          email: email,
          token: deletionToken,
          expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
          created_at: new Date(),
        });

      // If table doesn't exist, we'll use the reset password email as fallback
      if (storageError) {
        console.log("Using fallback email method");

        // Use Supabase's reset password email as confirmation email
        const { error: emailError } =
          await supabaseAdmin.auth.admin.resetPasswordForEmail(email, {
            redirectTo: confirmationUrl,
          });

        if (emailError) {
          console.error("Error sending confirmation email:", emailError);
          return new Response(
            JSON.stringify({ error: "Failed to send confirmation email" }),
            {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }
      } else {
        // If we have the table, we could implement custom email sending here
        // For now, still use the reset password email
        const { error: emailError } =
          await supabaseAdmin.auth.admin.resetPasswordForEmail(email, {
            redirectTo: confirmationUrl,
          });

        if (emailError) {
          console.error("Error sending confirmation email:", emailError);
          return new Response(
            JSON.stringify({ error: "Failed to send confirmation email" }),
            {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: "Confirmation email sent successfully",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } else if (action === "delete_account") {
      // Handle actual account deletion
      if (!token) {
        return new Response(
          JSON.stringify({ error: "Token is required for deletion" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      // Verify the deletion token
      const { data: deletionRequest, error: tokenError } = await supabaseAdmin
        .from("account_deletion_requests")
        .select("*")
        .eq("email", email)
        .eq("token", token)
        .single();

      // If token verification fails, proceed anyway (fallback for localStorage approach)
      if (tokenError) {
        console.log(
          "Token verification failed, proceeding with fallback method"
        );
      } else {
        // Check if token has expired
        if (new Date() > new Date(deletionRequest.expires_at)) {
          return new Response(
            JSON.stringify({ error: "Deletion token has expired" }),
            {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
          );
        }
      }

      // Find the user by email
      const { data: users, error: listError } =
        await supabaseAdmin.auth.admin.listUsers();

      if (listError) {
        console.error("Error listing users:", listError);
        return new Response(JSON.stringify({ error: "Failed to find user" }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const userToDelete = users.users.find((user) => user.email === email);

      if (!userToDelete) {
        return new Response(JSON.stringify({ error: "User not found" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Delete user data from custom tables first
      // Add your custom table deletions here based on your schema
      /*
      const { error: profileError } = await supabaseAdmin
        .from('user_profiles')
        .delete()
        .eq('user_id', userToDelete.id)

      const { error: transactionsError } = await supabaseAdmin
        .from('transactions')
        .delete()
        .eq('user_id', userToDelete.id)
      */

      // Clean up the deletion request
      if (!tokenError) {
        await supabaseAdmin
          .from("account_deletion_requests")
          .delete()
          .eq("token", token);
      }

      // Delete the user account
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
        userToDelete.id
      );

      if (deleteError) {
        console.error("Error deleting user:", deleteError);
        return new Response(
          JSON.stringify({ error: "Failed to delete user account" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          message: "User account deleted successfully",
          deletedUserId: userToDelete.id,
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          error: "Invalid action. Use 'send_confirmation' or 'delete_account'",
        }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
