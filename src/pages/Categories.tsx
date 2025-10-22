import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Edit, Trash2, Package, Warehouse as WarehouseIcon } from "lucide-react";

const Categories = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Categories & Warehouses</h1>
          <p className="text-muted-foreground">Organize your inventory structure</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Categories
                </CardTitle>
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Category
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Electronics', count: 234, color: 'bg-blue-500' },
                    { name: 'Office Supplies', count: 189, color: 'bg-green-500' },
                    { name: 'Raw Materials', count: 342, color: 'bg-purple-500' },
                    { name: 'Packaging', count: 156, color: 'bg-orange-500' },
                    { name: 'Hardware', count: 203, color: 'bg-red-500' },
                    { name: 'Textiles', count: 98, color: 'bg-pink-500' },
                    { name: 'Food & Beverage', count: 145, color: 'bg-yellow-500' },
                  ].map((category, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                        <div>
                          <p className="font-medium">{category.name}</p>
                          <p className="text-sm text-muted-foreground">{category.count} products</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <WarehouseIcon className="w-5 h-5" />
                  Warehouses
                </CardTitle>
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Warehouse
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Main Warehouse', location: 'New York, NY', capacity: 85, items: 542 },
                    { name: 'West Coast Hub', location: 'Los Angeles, CA', capacity: 72, items: 387 },
                    { name: 'Central Distribution', location: 'Chicago, IL', capacity: 91, items: 623 },
                    { name: 'East Regional', location: 'Boston, MA', capacity: 65, items: 289 },
                    { name: 'South Facility', location: 'Atlanta, GA', capacity: 58, items: 234 },
                  ].map((warehouse, i) => (
                    <div key={i} className="p-4 border border-border rounded-lg hover:bg-muted/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-semibold">{warehouse.name}</h4>
                          <p className="text-sm text-muted-foreground">{warehouse.location}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Capacity</span>
                          <span className="font-medium">{warehouse.capacity}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              warehouse.capacity > 80 ? 'bg-destructive' : 
                              warehouse.capacity > 60 ? 'bg-warning' : 'bg-success'
                            }`}
                            style={{ width: `${warehouse.capacity}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Total Items</span>
                          <span className="font-medium">{warehouse.items}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;
