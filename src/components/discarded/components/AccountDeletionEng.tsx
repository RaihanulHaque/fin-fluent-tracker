
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Mail, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const AccountDeletionEng: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDeleteRequest = () => {
    if (!email) {
      toast.error('Email address is required');
      return;
    }

    // Simulate sending deletion email
    setIsSubmitted(true);
    toast.success('Deletion link sent to your email');
  };

  if (isSubmitted) {
    return (
      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
        <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
          Email Sent
        </h3>
        <p className="text-red-700 dark:text-red-300 text-sm">
          Please check your email and click the deletion link to permanently delete your account.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-red-600" />
        <h3 className="font-semibold text-red-800 dark:text-red-200">
          Delete Account
        </h3>
      </div>
      
      <p className="text-red-700 dark:text-red-300 text-sm mb-4">
        To permanently delete your account, enter your email address below.
        We'll send you a confirmation email with a deletion link.
      </p>
      
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={handleDeleteRequest}
          variant="destructive"
          size="sm"
          className="whitespace-nowrap"
        >
          <Trash2 className="w-4 h-4 mr-1" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default AccountDeletionEng;
