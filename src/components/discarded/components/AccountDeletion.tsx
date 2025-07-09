
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Trash2, Mail, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const AccountDeletion: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDeleteRequest = () => {
    if (!email) {
      toast.error('ইমেইল ঠিকানা প্রয়োজন');
      return;
    }

    // Simulate sending deletion email
    setIsSubmitted(true);
    toast.success('ডিলিট লিংক আপনার ইমেইলে পাঠানো হয়েছে');
  };

  if (isSubmitted) {
    return (
      <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
        <Mail className="w-8 h-8 text-red-600 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-2">
          ইমেইল পাঠানো হয়েছে
        </h3>
        <p className="text-red-700 dark:text-red-300 text-sm">
          আপনার অ্যাকাউন্ট ডিলিট করার জন্য ইমেইলে পাঠানো লিংকে ক্লিক করুন।
        </p>
      </div>
    );
  }

  return (
    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle className="w-5 h-5 text-red-600" />
        <h3 className="font-semibold text-red-800 dark:text-red-200">
          অ্যাকাউন্ট ডিলিট করুন
        </h3>
      </div>
      
      <p className="text-red-700 dark:text-red-300 text-sm mb-4">
        আপনার অ্যাকাউন্ট স্থায়ীভাবে ডিলিট করতে চাইলে, আপনার ইমেইল ঠিকানা দিন।
        আমরা আপনাকে একটি নিশ্চিতকরণ ইমেইল পাঠাবো।
      </p>
      
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="আপনার ইমেইল ঠিকানা"
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
          ডিলিট
        </Button>
      </div>
    </div>
  );
};

export default AccountDeletion;
