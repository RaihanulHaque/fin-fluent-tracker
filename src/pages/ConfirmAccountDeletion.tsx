import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ConfirmAccountDeletion: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    if (!token || !email) {
      setError("Invalid deletion link. Please request a new one.");
    }
  }, [token, email]);

  const handleConfirmDeletion = async () => {
    setIsLoading(true);

    try {
      // Call the Supabase Edge Function to delete the account
      const { data, error } = await supabase.functions.invoke(
        "delete-user-account",
        {
          body: {
            email: decodeURIComponent(email),
            token: token,
            action: "delete_account",
          },
        }
      );

      if (error) {
        console.error("Error deleting account:", error);
        toast.error("Failed to delete account. Please try again.");
        return;
      }

      toast.success("Account deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to delete account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Account Deletion Failed
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
          <Button onClick={() => navigate("/")} className="w-full">
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  if (isDeleted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Account Deleted Successfully
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Your account and all associated data have been permanently deleted.
            You will be redirected to the home page shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Confirm Account Deletion
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Are you sure you want to permanently delete your account? This
            action cannot be undone.
          </p>
        </div>

        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
            What will be deleted:
          </h3>
          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
            <li>• Your user profile and settings</li>
            <li>• All expense and income records</li>
            <li>• All financial data and history</li>
            <li>• Your account access credentials</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Button
            onClick={handleConfirmDeletion}
            variant="destructive"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Deleting Account..." : "Yes, Delete My Account"}
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="w-full"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccountDeletion;
