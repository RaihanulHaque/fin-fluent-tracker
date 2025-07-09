import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Edit,
  Bell,
  Shield,
  Palette,
  Download,
  Trash2,
  Settings,
} from "lucide-react";
import Header from "@/components/discarded/components/Header";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+880 1234567890",
    currency: "BDT",
  });

  const [notifications, setNotifications] = useState({
    expense: true,
    weekly: false,
    monthly: true,
    budget: true,
  });

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Export started",
      description: "Your data export will be ready shortly.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto">
              <User className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                {profile.name}
              </h1>
              <p className="text-muted-foreground">{profile.email}</p>
              <Badge variant="secondary" className="mt-2">
                Free Plan
              </Badge>
            </div>
          </div>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    isEditing ? handleSave() : setIsEditing(true)
                  }
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Save" : "Edit"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Preferred Currency</Label>
                  <Input
                    id="currency"
                    value={profile.currency}
                    onChange={(e) =>
                      setProfile({ ...profile, currency: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Expense Alerts</p>
                  <p className="text-xs text-muted-foreground">
                    Get notified when you add new expenses
                  </p>
                </div>
                <Switch
                  checked={notifications.expense}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, expense: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Weekly Summary</p>
                  <p className="text-xs text-muted-foreground">
                    Receive weekly spending summaries
                  </p>
                </div>
                <Switch
                  checked={notifications.weekly}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, weekly: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Monthly Reports</p>
                  <p className="text-xs text-muted-foreground">
                    Get detailed monthly expense reports
                  </p>
                </div>
                <Switch
                  checked={notifications.monthly}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, monthly: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Budget Warnings</p>
                  <p className="text-xs text-muted-foreground">
                    Alert when approaching budget limits
                  </p>
                </div>
                <Switch
                  checked={notifications.budget}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, budget: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Data & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-3">
                <Button
                  variant="outline"
                  onClick={handleExportData}
                  className="justify-start"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export My Data
                </Button>
                <Button
                  variant="outline"
                  className="justify-start text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
              <Separator />
              <p className="text-xs text-muted-foreground">
                Your data is encrypted and stored securely. We never share your
                personal information with third parties.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
