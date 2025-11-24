import { Card } from "@/components/ui/card";
import { DollarSign, TrendingUp, Clock, Users } from "lucide-react";

export const Slide11 = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h3>
        <p className="text-muted-foreground">Complete business overview at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
            <div className="bg-primary/20 p-2 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">$284,500</p>
          <p className="text-xs text-primary mt-1">+12.5% from last month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Total Bookings</p>
            <div className="bg-accent/20 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-accent" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">127</p>
          <p className="text-xs text-muted-foreground mt-1">45 this month</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Ongoing Jobs</p>
            <div className="bg-primary/20 p-2 rounded-lg">
              <Clock className="h-5 w-5 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">23</p>
          <p className="text-xs text-muted-foreground mt-1">8 scheduled today</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Active Technicians</p>
            <div className="bg-accent/20 p-2 rounded-lg">
              <Users className="h-5 w-5 text-accent" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">12</p>
          <p className="text-xs text-muted-foreground mt-1">9 on duty now</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Recent Bookings</h4>
          <div className="space-y-3">
            {[
              { id: "WI-2834", customer: "Maria Garcia", status: "In Progress", amount: "$14,650" },
              { id: "WI-2835", customer: "Juan Rodriguez", status: "Scheduled", amount: "$8,200" },
              { id: "WI-2836", customer: "Carlos Mendez", status: "Completed", amount: "$12,500" },
            ].map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-foreground">{booking.id}</p>
                  <p className="text-xs text-muted-foreground">{booking.customer}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{booking.amount}</p>
                  <p className="text-xs text-primary">{booking.status}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Technician Performance</h4>
          <div className="space-y-3">
            {[
              { name: "Carlos Mendez", jobs: 127, rating: "4.8", earnings: "$45,200" },
              { name: "Juan Rodriguez", jobs: 203, rating: "4.9", earnings: "$67,800" },
              { name: "Miguel Santos", jobs: 89, rating: "4.7", earnings: "$32,100" },
            ].map((tech) => (
              <div key={tech.name} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-foreground">{tech.name}</p>
                  <p className="text-xs text-muted-foreground">
                    ⭐ {tech.rating} • {tech.jobs} jobs
                  </p>
                </div>
                <p className="text-sm font-semibold text-primary">{tech.earnings}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="mt-8 bg-card p-6 rounded-lg border">
        <h4 className="font-semibold text-foreground mb-3">Dashboard Features:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Real-time revenue tracking</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Live job monitoring</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Technician performance analytics</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Pending payment alerts</p>
          </div>
        </div>
      </div>
    </div>
  );
};
