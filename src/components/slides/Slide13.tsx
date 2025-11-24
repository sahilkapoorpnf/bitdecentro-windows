import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { MapPin, Phone, Calendar, DollarSign } from "lucide-react";
import { AdminLayout } from "@/components/AdminLayout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const techPerformanceData = [
  { name: "Carlos M.", jobs: 127, earnings: 45200 },
  { name: "Juan R.", jobs: 203, earnings: 67800 },
  { name: "Miguel S.", jobs: 89, earnings: 32100 },
  { name: "Diego H.", jobs: 156, earnings: 54300 },
];

export const Slide13 = () => {
  return (
    <AdminLayout title="Technician Management">
      <div className="space-y-6">
        {/* Performance Chart */}
        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Technician Performance Comparison</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={techPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Bar dataKey="jobs" fill="hsl(var(--primary))" name="Jobs Completed" />
              <Bar dataKey="earnings" fill="hsl(var(--accent))" name="Earnings ($)" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Technician Cards */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        {[
          { name: "Carlos Mendez", rating: "4.8", jobs: "127", status: "active", earnings: "$45,200" },
          { name: "Juan Rodriguez", rating: "4.9", jobs: "203", status: "active", earnings: "$67,800" },
          { name: "Miguel Santos", rating: "4.7", jobs: "89", status: "offline", earnings: "$32,100" },
        ].map((tech) => (
          <Card key={tech.name} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 bg-primary/20" />
                <div>
                  <p className="font-semibold text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">⭐ {tech.rating} • {tech.jobs} jobs</p>
                </div>
              </div>
              <Badge variant={tech.status === "active" ? "default" : "secondary"}>
                {tech.status === "active" ? "Active" : "Offline"}
              </Badge>
            </div>

            <div className="space-y-2 text-sm mb-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Earnings</span>
                <span className="font-semibold text-primary">{tech.earnings}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Completion Rate</span>
                <span className="font-semibold text-foreground">98%</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                View Profile
              </button>
              <button className="p-2 border rounded-lg hover:bg-muted transition-colors">
                <Phone className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Today's Schedule</h4>
          <div className="space-y-3">
            {[
              { tech: "Carlos Mendez", time: "9:00 AM", job: "WI-2834", location: "Polanco" },
              { tech: "Juan Rodriguez", time: "11:00 AM", job: "WI-2835", location: "Roma Norte" },
              { tech: "Carlos Mendez", time: "2:00 PM", job: "WI-2836", location: "Condesa" },
            ].map((schedule, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Calendar className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{schedule.tech}</p>
                    <p className="text-xs text-muted-foreground">{schedule.job} • {schedule.location}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-foreground">{schedule.time}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Live GPS Tracking</h4>
          <div className="bg-muted rounded-lg h-48 flex items-center justify-center mb-4">
            <MapPin className="h-12 w-12 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            {[
              { name: "Carlos Mendez", location: "En route to Polanco", eta: "12 mins" },
              { name: "Juan Rodriguez", location: "At customer site", eta: "Installing" },
            ].map((tracker, i) => (
              <div key={i} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg text-sm">
                <div>
                  <p className="font-medium text-foreground">{tracker.name}</p>
                  <p className="text-xs text-muted-foreground">{tracker.location}</p>
                </div>
                <Badge variant="outline">{tracker.eta}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h4 className="font-semibold text-foreground mb-4">Payment Logs</h4>
        <div className="space-y-2">
          {[
            { tech: "Carlos Mendez", date: "Nov 24, 2024", amount: "$3,200", status: "Paid" },
            { tech: "Juan Rodriguez", date: "Nov 24, 2024", amount: "$4,800", status: "Pending" },
            { tech: "Miguel Santos", date: "Nov 23, 2024", amount: "$2,600", status: "Paid" },
          ].map((payment, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <DollarSign className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">{payment.tech}</p>
                  <p className="text-xs text-muted-foreground">{payment.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">{payment.amount}</p>
                <Badge variant={payment.status === "Paid" ? "default" : "secondary"} className="text-xs">
                  {payment.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
        </Card>
      </div>
    </AdminLayout>
  );
};
