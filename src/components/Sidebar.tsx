import { Home, Package, Users, ShoppingCart, FileText, TrendingUp, Settings, AlertCircle, Warehouse, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Package, label: "Products", path: "/products" },
    { icon: Warehouse, label: "Stock Management", path: "/stock" },
    { icon: Users, label: "Suppliers", path: "/suppliers" },
    { icon: ShoppingCart, label: "Purchase Orders", path: "/purchase-orders" },
    { icon: FileText, label: "Sales Orders", path: "/sales-orders" },
    { icon: Tags, label: "Categories", path: "/categories" },
    { icon: TrendingUp, label: "Reports", path: "/reports" },
    { icon: AlertCircle, label: "Alerts", path: "/alerts" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">InventoryPro</h1>
        <p className="text-xs text-sidebar-foreground/70 mt-1">Enterprise System</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={() => navigate(item.path)}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 bg-sidebar-accent rounded-lg">
          <div className="w-10 h-10 bg-wireframe-gray rounded-full flex items-center justify-center text-xs font-semibold">
            AD
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">Admin User</p>
            <p className="text-xs text-sidebar-foreground/70">admin@system.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
