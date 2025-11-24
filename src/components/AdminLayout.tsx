import { ReactNode } from "react";
import { LayoutDashboard, ClipboardList, Users, UserCog, Package, Megaphone } from "lucide-react";
import logo from "@/assets/bitdecentro-logo.png";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: ClipboardList, label: "Orders", active: false },
  { icon: Users, label: "Technicians", active: false },
  { icon: UserCog, label: "Customers", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: Megaphone, label: "Marketing", active: false },
];

export const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        {/* Logo Section */}
        <div className="h-16 flex items-center px-6 border-b border-border">
          <img src={logo} alt="Bitdecentro" className="h-8" />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/50">
            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">AD</span>
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@bitdecentro.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-8">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              + New Order
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};
