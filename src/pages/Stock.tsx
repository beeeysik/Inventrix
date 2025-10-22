import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Plus, ArrowUpCircle, ArrowDownCircle, Filter } from "lucide-react";

const Stock = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Stock Management</h1>
            <p className="text-muted-foreground">Track and manage inventory levels</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <ArrowUpCircle className="w-4 h-4" />
              Stock In
            </Button>
            <Button variant="outline" className="gap-2">
              <ArrowDownCircle className="w-4 h-4" />
              Stock Out
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Adjust Stock
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Stock Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">$458,923</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Stock In (Today)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-success">+234</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Stock Out (Today)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-destructive">-189</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Warehouses</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">5</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search stock movements..." className="pl-10" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Stock Movements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold text-sm">Date/Time</th>
                    <th className="text-left p-3 font-semibold text-sm">Product</th>
                    <th className="text-left p-3 font-semibold text-sm">SKU</th>
                    <th className="text-left p-3 font-semibold text-sm">Type</th>
                    <th className="text-left p-3 font-semibold text-sm">Quantity</th>
                    <th className="text-left p-3 font-semibold text-sm">Warehouse</th>
                    <th className="text-left p-3 font-semibold text-sm">Reference</th>
                    <th className="text-left p-3 font-semibold text-sm">User</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                    const isStockIn = i % 2 === 0;
                    return (
                      <tr key={i} className="border-b border-border hover:bg-muted/50">
                        <td className="p-3 text-sm text-muted-foreground">
                          2025-10-{20 + (i % 5)}<br/>
                          <span className="text-xs">14:{30 + i}:00</span>
                        </td>
                        <td className="p-3 font-medium">Product Item {i}</td>
                        <td className="p-3 text-sm">SKU-{1000 + i}</td>
                        <td className="p-3">
                          <span className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 w-fit ${
                            isStockIn 
                              ? 'bg-success/10 text-success' 
                              : 'bg-destructive/10 text-destructive'
                          }`}>
                            {isStockIn ? <ArrowUpCircle className="w-3 h-3" /> : <ArrowDownCircle className="w-3 h-3" />}
                            {isStockIn ? 'Stock In' : 'Stock Out'}
                          </span>
                        </td>
                        <td className="p-3">
                          <span className={`font-semibold ${isStockIn ? 'text-success' : 'text-destructive'}`}>
                            {isStockIn ? '+' : '-'}{50 + i * 5}
                          </span>
                        </td>
                        <td className="p-3 text-sm">Warehouse {(i % 3) + 1}</td>
                        <td className="p-3 text-sm text-muted-foreground">{isStockIn ? 'PO' : 'SO'}-{5000 + i}</td>
                        <td className="p-3 text-sm text-muted-foreground">User {i % 4 + 1}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-10 of 543 movements</p>
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

export default Stock;
