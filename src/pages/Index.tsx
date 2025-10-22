import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import { Package, TrendingUp, AlertTriangle, DollarSign, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your inventory overview.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Products"
            value="1,284"
            icon={Package}
            trend="+12% from last month"
            trendUp={true}
          />
          <DashboardCard
            title="Total Stock Value"
            value="$458,923"
            icon={DollarSign}
            trend="+8% from last month"
            trendUp={true}
          />
          <DashboardCard
            title="Low Stock Items"
            value="23"
            icon={AlertTriangle}
            trend="Needs attention"
            trendUp={false}
          />
          <DashboardCard
            title="Pending Orders"
            value="47"
            icon={ShoppingCart}
            trend="+5 from yesterday"
            trendUp={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Recent Stock Movements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-wireframe-gray rounded"></div>
                      <div>
                        <p className="font-medium">Product Name {i}</p>
                        <p className="text-sm text-muted-foreground">SKU-{1000 + i}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{i % 2 === 0 ? '+' : '-'}{50 * i}</p>
                      <p className="text-sm text-muted-foreground">{i % 2 === 0 ? 'In' : 'Out'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Sales Overview</CardTitle>
              <Button variant="outline" size="sm">View Report</Button>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-wireframe-gray rounded-lg flex items-center justify-center">
                <div className="text-center text-wireframe-dark">
                  <TrendingUp className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Sales Chart</p>
                  <p className="text-sm">Line/Bar Chart Placeholder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Suppliers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {['Alpha Corp', 'Beta Supplies', 'Gamma Industries', 'Delta Trading'].map((supplier, i) => (
                  <div key={i} className="flex items-center justify-between p-2 border border-border rounded">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{supplier}</span>
                    </div>
                    <span className="text-sm font-medium">{100 - i * 10}+ items</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Low Stock Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2 bg-destructive/10 border border-destructive/20 rounded">
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Product Item {i}</p>
                      <p className="text-xs text-muted-foreground">Only {5 + i} units left</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start" variant="outline">
                <Package className="w-4 h-4 mr-2" />
                Add New Product
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Create Purchase Order
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Users className="w-4 h-4 mr-2" />
                Add Supplier
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="w-4 h-4 mr-2" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
