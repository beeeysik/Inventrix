import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, TrendingUp, BarChart3, PieChart, FileText } from "lucide-react";

const Reports = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate and view business reports</p>
          </div>
          <Button className="gap-2">
            <Download className="w-4 h-4" />
            Export All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Inventory Report', icon: BarChart3, description: 'Current stock levels' },
            { title: 'Sales Report', icon: TrendingUp, description: 'Sales performance' },
            { title: 'Purchase Report', icon: FileText, description: 'Purchase history' },
            { title: 'Financial Report', icon: PieChart, description: 'Financial overview' },
          ].map((report, i) => {
            const Icon = report.icon;
            return (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{report.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{report.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Generate Report
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Inventory Valuation by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-wireframe-gray rounded-lg flex items-center justify-center">
                <div className="text-center text-wireframe-dark">
                  <PieChart className="w-16 h-16 mx-auto mb-2" />
                  <p className="font-medium">Pie Chart Placeholder</p>
                  <p className="text-sm">Category distribution</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 bg-wireframe-gray rounded-lg flex items-center justify-center">
                <div className="text-center text-wireframe-dark">
                  <TrendingUp className="w-16 h-16 mx-auto mb-2" />
                  <p className="font-medium">Line Chart Placeholder</p>
                  <p className="text-sm">Sales over time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stock Movement Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-wireframe-gray rounded-lg flex items-center justify-center">
              <div className="text-center text-wireframe-dark">
                <BarChart3 className="w-16 h-16 mx-auto mb-2" />
                <p className="font-medium">Bar Chart Placeholder</p>
                <p className="text-sm">In/Out stock movements</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Reports;
