import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Eye, Edit, Filter, Printer } from "lucide-react";

const SalesOrders = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Sales Orders</h1>
            <p className="text-muted-foreground">Manage customer sales orders</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Sales Order
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search by SO number, customer, or date..." className="pl-10" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-sm">SO Number</th>
                    <th className="text-left p-3 font-semibold text-sm">Customer</th>
                    <th className="text-left p-3 font-semibold text-sm">Order Date</th>
                    <th className="text-left p-3 font-semibold text-sm">Delivery Date</th>
                    <th className="text-left p-3 font-semibold text-sm">Items</th>
                    <th className="text-left p-3 font-semibold text-sm">Total Amount</th>
                    <th className="text-left p-3 font-semibold text-sm">Payment</th>
                    <th className="text-left p-3 font-semibold text-sm">Status</th>
                    <th className="text-left p-3 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                    const statuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
                    const paymentStatuses = ['Paid', 'Pending', 'Partial'];
                    const statusColors = ['bg-warning/10 text-warning', 'bg-primary/10 text-primary', 'bg-accent/10 text-accent', 'bg-success/10 text-success', 'bg-destructive/10 text-destructive'];
                    const paymentColors = ['bg-success/10 text-success', 'bg-warning/10 text-warning', 'bg-accent/10 text-accent'];
                    const statusIndex = i % 5;
                    const paymentIndex = i % 3;
                    
                    return (
                      <tr key={i} className="border-b border-border hover:bg-muted/50">
                        <td className="p-3 font-medium">SO-{6000 + i}</td>
                        <td className="p-3">
                          <div>
                            <p className="font-medium">Customer {i}</p>
                            <p className="text-xs text-muted-foreground">customer{i}@email.com</p>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">2025-10-{18 + i}</td>
                        <td className="p-3 text-sm text-muted-foreground">2025-10-{23 + i}</td>
                        <td className="p-3 text-sm">{3 + i} items</td>
                        <td className="p-3 font-medium">${(850 + i * 250).toFixed(2)}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${paymentColors[paymentIndex]}`}>
                            {paymentStatuses[paymentIndex]}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs ${statusColors[statusIndex]}`}>
                            {statuses[statusIndex]}
                          </span>
                        </td>
                        <td className="p-3">
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Printer className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-8 of 243 sales orders</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default SalesOrders;
