import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, AlertCircle, CheckCircle, Info } from "lucide-react";

const Alerts = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stock Alerts & Notifications</h1>
          <p className="text-muted-foreground">Monitor critical inventory status</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Critical Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">8</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-warning">23</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Expiring Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Resolved Today</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">15</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-destructive">
                <AlertTriangle className="w-5 h-5" />
                Critical Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { product: 'Electronics Component A', sku: 'SKU-1001', stock: 0, message: 'Out of stock' },
                { product: 'Office Supply B', sku: 'SKU-1045', stock: 2, message: 'Critically low stock' },
                { product: 'Raw Material C', sku: 'SKU-1189', stock: 1, message: 'Only 1 unit remaining' },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                    <div>
                      <p className="font-medium">{alert.product}</p>
                      <p className="text-sm text-muted-foreground">{alert.sku} - {alert.message}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="destructive">Reorder Now</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-warning">
                <AlertCircle className="w-5 h-5" />
                Low Stock Warnings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { product: 'Product Item 5', sku: 'SKU-1005', stock: 8, threshold: 20 },
                { product: 'Product Item 12', sku: 'SKU-1012', stock: 12, threshold: 25 },
                { product: 'Product Item 18', sku: 'SKU-1018', stock: 15, threshold: 30 },
                { product: 'Product Item 23', sku: 'SKU-1023', stock: 9, threshold: 20 },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-warning/5 border border-warning/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-warning" />
                    <div>
                      <p className="font-medium">{alert.product}</p>
                      <p className="text-sm text-muted-foreground">{alert.sku} - {alert.stock} units (Below threshold: {alert.threshold})</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Create PO</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-accent">
                <Info className="w-5 h-5" />
                Informational Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { message: 'Shipment from Alpha Corp arriving tomorrow', time: '2 hours ago' },
                { message: 'New products added to Electronics category', time: '4 hours ago' },
                { message: 'Monthly inventory report generated', time: '6 hours ago' },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-medium">{alert.message}</p>
                      <p className="text-sm text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">View</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-success">
                <CheckCircle className="w-5 h-5" />
                Recently Resolved
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { product: 'Product Item 7', action: 'Restocked - 150 units added', time: '1 hour ago' },
                { product: 'Product Item 14', action: 'Restocked - 200 units added', time: '3 hours ago' },
                { product: 'Product Item 21', action: 'Restocked - 100 units added', time: '5 hours ago' },
              ].map((alert, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-success/5 border border-success/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-medium">{alert.product}</p>
                      <p className="text-sm text-muted-foreground">{alert.action} • {alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Alerts;
