import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, MapPin, User } from "lucide-react";
import { AdminLayout } from "@/components/AdminLayout";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const orderStatusData = [
  { name: "Pending", value: 18, color: "hsl(var(--primary))" },
  { name: "In Progress", value: 23, color: "hsl(var(--accent))" },
  { name: "Completed", value: 86, color: "hsl(142, 71%, 45%)" },
];

export const Slide12 = () => {
  return (
    <AdminLayout title="Order Management">
      <div className="space-y-6">{/* Stats Cards */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="p-4 border-primary/30 bg-primary/5">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">18</p>
              <p className="text-sm text-muted-foreground mt-1">Pending Orders</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-foreground">23</p>
              <p className="text-sm text-muted-foreground mt-1">In Progress</p>
            </div>
          </Card>
          <Card className="p-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">86</p>
              <p className="text-sm text-muted-foreground mt-1">Completed Today</p>
            </div>
          </Card>
          <Card className="p-4">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Order Distribution</h4>
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Orders List */}

      <Card className="p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold text-foreground">Recent Orders</h4>
          <div className="flex gap-2">
            <Badge variant="outline">All</Badge>
            <Badge>Pending</Badge>
            <Badge variant="outline">Assigned</Badge>
          </div>
        </div>

        <div className="space-y-3">
          {[
            {
              id: "WI-2837",
              customer: "Sofia Martinez",
              service: "New Installation",
              windows: "3x PVC",
              amount: "$21,400",
              location: "Polanco, CDMX",
              status: "pending",
              time: "2 mins ago",
            },
            {
              id: "WI-2838",
              customer: "Diego Hernandez",
              service: "Replacement",
              windows: "2x Aluminum",
              amount: "$14,200",
              location: "Roma Norte, CDMX",
              status: "pending",
              time: "5 mins ago",
            },
            {
              id: "WI-2839",
              customer: "Isabella Lopez",
              service: "Repair",
              windows: "1x Wood",
              amount: "$5,800",
              location: "Condesa, CDMX",
              status: "assigned",
              time: "12 mins ago",
            },
          ].map((order) => (
            <Card key={order.id} className="p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground">{order.id}</p>
                    <Badge
                      variant={order.status === "pending" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {order.status === "pending" ? "New Order" : "Assigned"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{order.time}</p>
                </div>
                <p className="text-lg font-bold text-primary">{order.amount}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{order.customer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground">{order.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t">
                <div>
                  <p className="text-xs text-muted-foreground">{order.service}</p>
                  <p className="text-sm font-medium text-foreground">{order.windows}</p>
                </div>
                {order.status === "pending" ? (
                  <div className="flex gap-2">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      Accept
                    </button>
                    <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                      <XCircle className="h-4 w-4 inline mr-1" />
                      Reject
                    </button>
                  </div>
                ) : (
                  <button className="px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary/5 transition-colors">
                    View Details
                  </button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Card>
      </div>
    </AdminLayout>
  );
};
