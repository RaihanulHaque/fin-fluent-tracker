import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Mail, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const AccountDeletion: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteRequest = async () => {
    if (!email) {
      toast.error(t("accountDeletion.emailRequired"));
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    try {
      // Call the API to send confirmation email via proxy
      const apiUrl =
        process.env.NODE_ENV === "development"
          ? "/api/request-delete-by-email"
          : "https://api.hishab.app/request-delete-by-email";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });

      if (response.status === 422) {
        // Handle validation error
        const errorData = await response.json();
        const errorMessage =
          errorData.detail?.[0]?.msg || "Invalid email format";
        toast.error(errorMessage);
        return;
      }

      if (!response.ok) {
        console.error("Error sending confirmation email:", response.statusText);
        toast.error("Failed to send confirmation email. Please try again.");
        return;
      }

      // Handle successful response (200)
      const responseData = await response.json();
      console.log("Delete request submitted successfully:", responseData);

      // Show success message
      toast.success(t("accountDeletion.successMessage"));
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
        <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
          {t("accountDeletion.emailSent.title")}
        </h3>
        <p className="text-red-700 dark:text-red-300 text-sm">
          {t("accountDeletion.emailSent.description")}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-red-600" />
        <h3 className="font-semibold text-red-800 dark:text-red-200">
          {t("accountDeletion.title")}
        </h3>
      </div>

      <p className="text-red-700 dark:text-red-300 text-sm mb-4">
        {t("accountDeletion.description")}
      </p>

      <div className="flex gap-2">
        <Input
          type="email"
          placeholder={t("accountDeletion.emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={handleDeleteRequest}
          variant="destructive"
          size="sm"
          className="whitespace-nowrap"
          disabled={isLoading}
        >
          <Trash2 className="w-4 h-4 mr-1" />
          {isLoading ? "Sending..." : t("accountDeletion.deleteButton")}
        </Button>
      </div>
    </div>
  );
};

export default AccountDeletion;
