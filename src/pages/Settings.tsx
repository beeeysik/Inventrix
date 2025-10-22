import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Database, Mail } from "lucide-react";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Manage system preferences and configuration</p>
        </div>

        <div className="space-y-6 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>First Name</Label>
                  <Input placeholder="Admin" className="mt-1" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input placeholder="User" className="mt-1" />
                </div>
              </div>
              <div>
                <Label>Email</Label>
                <Input type="email" placeholder="admin@system.com" className="mt-1" />
              </div>
              <div>
                <Label>Phone</Label>
                <Input type="tel" placeholder="+1 (555) 123-4567" className="mt-1" />
              </div>
              <Button>Save Profile</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: 'Low Stock Alerts', description: 'Get notified when products reach minimum threshold' },
                { label: 'Purchase Order Updates', description: 'Notifications for PO status changes' },
                { label: 'Sales Order Notifications', description: 'Alerts for new sales orders' },
                { label: 'System Updates', description: 'Important system maintenance notifications' },
              ].map((pref, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                  <div>
                    <p className="font-medium">{pref.label}</p>
                    <p className="text-sm text-muted-foreground">{pref.description}</p>
                  </div>
                  <Switch defaultChecked={i < 3} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Current Password</Label>
                <Input type="password" placeholder="Enter current password" className="mt-1" />
              </div>
              <div>
                <Label>New Password</Label>
                <Input type="password" placeholder="Enter new password" className="mt-1" />
              </div>
              <div>
                <Label>Confirm Password</Label>
                <Input type="password" placeholder="Confirm new password" className="mt-1" />
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                System Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Default Currency</Label>
                <Input placeholder="USD" className="mt-1" />
              </div>
              <div>
                <Label>Low Stock Threshold</Label>
                <Input type="number" placeholder="20" className="mt-1" />
              </div>
              <div>
                <Label>Tax Rate (%)</Label>
                <Input type="number" placeholder="8.5" className="mt-1" />
              </div>
              <Button>Save Configuration</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>SMTP Server</Label>
                <Input placeholder="smtp.gmail.com" className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>SMTP Port</Label>
                  <Input placeholder="587" className="mt-1" />
                </div>
                <div>
                  <Label>Encryption</Label>
                  <Input placeholder="TLS" className="mt-1" />
                </div>
              </div>
              <div>
                <Label>Email Address</Label>
                <Input type="email" placeholder="noreply@system.com" className="mt-1" />
              </div>
              <Button>Test & Save</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;
