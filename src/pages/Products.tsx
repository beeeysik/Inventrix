import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Edit, Trash2, Filter } from "lucide-react";

const Products = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Products Management</h1>
            <p className="text-muted-foreground">Manage your product inventory</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search products by name, SKU, or category..." className="pl-10" />
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
                    <th className="text-left p-3 font-semibold text-sm">Image</th>
                    <th className="text-left p-3 font-semibold text-sm">SKU</th>
                    <th className="text-left p-3 font-semibold text-sm">Product Name</th>
                    <th className="text-left p-3 font-semibold text-sm">Category</th>
                    <th className="text-left p-3 font-semibold text-sm">Stock</th>
                    <th className="text-left p-3 font-semibold text-sm">Unit Price</th>
                    <th className="text-left p-3 font-semibold text-sm">Status</th>
                    <th className="text-left p-3 font-semibold text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/50">
                      <td className="p-3">
                        <div className="w-12 h-12 bg-wireframe-gray rounded"></div>
                      </td>
                      <td className="p-3 text-sm">SKU-{1000 + i}</td>
                      <td className="p-3 font-medium">Product Item {i}</td>
                      <td className="p-3 text-sm text-muted-foreground">Category {i % 3 + 1}</td>
                      <td className="p-3">
                        <span className={`text-sm ${(50 + i * 10) < 20 ? 'text-destructive font-semibold' : ''}`}>
                          {50 + i * 10} units
                        </span>
                      </td>
                      <td className="p-3 font-medium">${(25.99 + i * 5).toFixed(2)}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          (50 + i * 10) < 20 
                            ? 'bg-destructive/10 text-destructive' 
                            : 'bg-success/10 text-success'
                        }`}>
                          {(50 + i * 10) < 20 ? 'Low Stock' : 'In Stock'}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-muted-foreground">Showing 1-8 of 1,284 products</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="default" size="sm">2</Button>
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

export default Products;
