import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, Edit, Trash2, Mail, Phone } from "lucide-react";

const Suppliers = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Suppliers Management</h1>
            <p className="text-muted-foreground">Manage your supplier relationships</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Supplier
          </Button>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search suppliers by name, contact, or location..." className="pl-10" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-wireframe-gray rounded-lg flex items-center justify-center text-xl font-bold">
                    S{i}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-1">
                  {['Alpha Corp', 'Beta Supplies', 'Gamma Industries', 'Delta Trading', 'Epsilon Materials', 'Zeta Wholesale', 'Eta Distribution', 'Theta Suppliers', 'Iota Imports'][i - 1]}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {['Electronics', 'Office Supplies', 'Raw Materials', 'Packaging', 'Hardware', 'Textiles', 'Food & Beverage', 'Chemicals', 'Machinery'][i - 1]}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">supplier{i}@company.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">+1 (555) {100 + i}-{200 + i * 2}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">Products Supplied</p>
                    <p className="font-semibold">{50 + i * 15}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total Orders</p>
                    <p className="font-semibold">{100 + i * 20}</p>
                  </div>
                  <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                    Active
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Suppliers;
