import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Package, TrendingDown, CheckCircle } from "lucide-react";

export const Slide15 = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">Materials & Inventory</h3>
        <p className="text-muted-foreground">Track stock levels and manage supply chain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 bg-primary/5 border-primary/30">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">In Stock</p>
            <div className="bg-primary/20 p-2 rounded-lg">
              <Package className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">247</p>
          <p className="text-xs text-muted-foreground mt-1">Items available</p>
        </Card>

        <Card className="p-4 border-destructive/30 bg-destructive/5">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
            <div className="bg-destructive/20 p-2 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
          </div>
          <p className="text-2xl font-bold text-destructive">12</p>
          <p className="text-xs text-muted-foreground mt-1">Need reorder</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
            <div className="bg-muted p-2 rounded-lg">
              <TrendingDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">3</p>
          <p className="text-xs text-muted-foreground mt-1">Items unavailable</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Orders Pending</p>
            <div className="bg-accent/20 p-2 rounded-lg">
              <CheckCircle className="h-4 w-4 text-accent" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">18</p>
          <p className="text-xs text-muted-foreground mt-1">Supplier orders</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Window Frames Inventory</h4>
          <div className="space-y-3">
            {[
              { type: "PVC Window Frame (Standard)", stock: 45, min: 20, status: "good" },
              { type: "Aluminum Frame (Premium)", stock: 8, min: 15, status: "low" },
              { type: "Wood Frame (Classic)", stock: 23, min: 10, status: "good" },
              { type: "PVC Window Frame (Large)", stock: 12, min: 10, status: "good" },
            ].map((item, i) => (
              <div key={i} className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm text-foreground">{item.type}</p>
                  <Badge variant={item.status === "low" ? "destructive" : "secondary"}>
                    {item.stock} units
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.status === "low" ? "bg-destructive" : "bg-primary"
                      }`}
                      style={{ width: `${(item.stock / (item.min * 3)) * 100}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Min: {item.min}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Glass Sheets</h4>
          <div className="space-y-3">
            {[
              { type: "Double Panel Clear Glass", stock: 67, min: 30, status: "good" },
              { type: "Triple Panel Glass", stock: 5, min: 15, status: "low" },
              { type: "Tinted Glass (Standard)", stock: 0, min: 10, status: "out" },
              { type: "Soundproof Glass", stock: 34, min: 20, status: "good" },
            ].map((item, i) => (
              <div key={i} className="p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm text-foreground">{item.type}</p>
                  <Badge
                    variant={
                      item.status === "out"
                        ? "destructive"
                        : item.status === "low"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {item.stock === 0 ? "Out of Stock" : `${item.stock} units`}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-background rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        item.status === "out"
                          ? "bg-destructive"
                          : item.status === "low"
                          ? "bg-destructive"
                          : "bg-primary"
                      }`}
                      style={{
                        width: `${Math.max(5, (item.stock / (item.min * 3)) * 100)}%`,
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">Min: {item.min}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 mb-6">
        <h4 className="font-semibold text-foreground mb-4">Hardware Kits</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Security Lock Set", stock: 89, min: 50 },
            { name: "Installation Hardware Kit", stock: 34, min: 30 },
            { name: "Mosquito Net Frame", stock: 156, min: 100 },
          ].map((kit, i) => (
            <div key={i} className="p-4 bg-muted/50 rounded-lg">
              <p className="font-medium text-foreground mb-2">{kit.name}</p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold text-primary">{kit.stock}</p>
                <p className="text-sm text-muted-foreground">/ {kit.min} min</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/30">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Purchase Alerts
        </h4>
        <div className="space-y-2">
          {[
            { item: "Aluminum Frame (Premium)", current: 8, needed: 15, urgency: "high" },
            { item: "Triple Panel Glass", current: 5, needed: 15, urgency: "high" },
            { item: "Tinted Glass (Standard)", current: 0, needed: 10, urgency: "critical" },
          ].map((alert, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-background rounded-lg">
              <div>
                <p className="font-medium text-sm text-foreground">{alert.item}</p>
                <p className="text-xs text-muted-foreground">
                  Current: {alert.current} | Need: {alert.needed}
                </p>
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
