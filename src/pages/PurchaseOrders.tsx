import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Eye, Edit, Filter } from "lucide-react";

const PurchaseOrders = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Purchase Orders</h1>
            <p className="text-muted-foreground">Manage purchase orders from suppliers</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Purchase Order
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search by PO number, supplier, or date..." className="pl-10" />
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
                    <th className="text-left p-3 font-semibold text-sm">PO Number</th>
                    <th className="text-left p-3 font-semibold text-sm">Supplier</th>
                    <th className="text-left p-3 font-semibold text-sm">Order Date</th>
                    <th className="text-left p-3 font-semibold text-sm">Expected Date</th>
                    <th className="text-left p-3 font-semibold text-sm">Items</th>
                    <th className="text-left p-3 font-semibold text-sm">Total Amount</th>
                    <th className="text-left p-3 font-semibold text-sm">Status</th>
                    <th className="text-left p-3 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                    const statuses = ['Pending', 'Approved', 'Shipped', 'Received', 'Cancelled'];
                    const statusColors = ['bg-warning/10 text-warning', 'bg-primary/10 text-primary', 'bg-accent/10 text-accent', 'bg-success/10 text-success', 'bg-destructive/10 text-destructive'];
                    const statusIndex = i % 5;
                    
                    return (
                      <tr key={i} className="border-b border-border hover:bg-muted/50">
                        <td className="p-3 font-medium">PO-{5000 + i}</td>
                        <td className="p-3">
                          {['Alpha Corp', 'Beta Supplies', 'Gamma Industries', 'Delta Trading', 'Epsilon Materials'][i % 5]}
                        </td>
                        <td className="p-3 text-sm text-muted-foreground">2025-10-{15 + i}</td>
                        <td className="p-3 text-sm text-muted-foreground">2025-10-{25 + i}</td>
                        <td className="p-3 text-sm">{5 + i * 2} items</td>
                        <td className="p-3 font-medium">${(1250 + i * 350).toFixed(2)}</td>
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
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-8 of 156 purchase orders</p>
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

export default PurchaseOrders;
