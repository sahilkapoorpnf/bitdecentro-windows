import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bell, Gift, TrendingUp } from "lucide-react";

export const Slide16 = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">Digital Marketing Tools</h3>
        <p className="text-muted-foreground">Automate promotions and engage customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4 bg-primary/5 border-primary/30">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">SMS Sent</p>
            <div className="bg-primary/20 p-2 rounded-lg">
              <MessageSquare className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">1,247</p>
          <p className="text-xs text-muted-foreground mt-1">This month</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Push Sent</p>
            <div className="bg-accent/20 p-2 rounded-lg">
              <Bell className="h-4 w-4 text-accent" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">3,892</p>
          <p className="text-xs text-muted-foreground mt-1">Active campaigns</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Coupons Used</p>
            <div className="bg-primary/20 p-2 rounded-lg">
              <Gift className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">342</p>
          <p className="text-xs text-muted-foreground mt-1">89% redemption</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-muted-foreground">Campaign ROI</p>
            <div className="bg-accent/20 p-2 rounded-lg">
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
          </div>
          <p className="text-2xl font-bold text-primary">387%</p>
          <p className="text-xs text-muted-foreground mt-1">Average return</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Auto SMS Promotions
          </h4>
          <div className="space-y-3">
            {[
              {
                type: "New Customer Welcome",
                status: "Active",
                sent: 45,
                response: "23%",
              },
              {
                type: "Seasonal Discount",
                status: "Scheduled",
                sent: 0,
                response: "-",
              },
              {
                type: "Maintenance Reminder",
                status: "Active",
                sent: 127,
                response: "18%",
              },
            ].map((campaign, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm text-foreground">{campaign.type}</p>
                  <Badge
                    variant={campaign.status === "Active" ? "default" : "secondary"}
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="text-muted-foreground">Sent</p>
                    <p className="font-semibold text-foreground">{campaign.sent}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Response Rate</p>
                    <p className="font-semibold text-primary">{campaign.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90">
            Create New Campaign
          </button>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            Push Notifications
          </h4>
          <div className="space-y-3">
            {[
              {
                title: "Flash Sale Alert",
                message: "20% off all PVC windows this weekend!",
                scheduled: "Today, 6:00 PM",
              },
              {
                title: "Order Update",
                message: "Your installation is scheduled for tomorrow",
                scheduled: "Triggered",
              },
              {
                title: "Review Request",
                message: "How was your installation experience?",
                scheduled: "After completion",
              },
            ].map((notification, i) => (
              <div key={i} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm text-foreground">{notification.title}</p>
                  <Badge variant="outline" className="text-xs">
                    {notification.scheduled}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{notification.message}</p>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90">
            Schedule Notification
          </button>
        </Card>
      </div>

      <Card className="p-6 mb-6">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Gift className="h-5 w-5 text-primary" />
          Seasonal Discount Coupons
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              code: "WINTER20",
              discount: "20% OFF",
              valid: "Until Dec 31",
              used: 89,
              total: 200,
            },
            {
              code: "NEWYEAR",
              discount: "$500 OFF",
              valid: "Until Jan 15",
              used: 34,
              total: 150,
            },
            {
              code: "REFERRAL15",
              discount: "15% OFF",
              valid: "Always Active",
              used: 156,
              total: "∞",
            },
          ].map((coupon, i) => (
            <div
              key={i}
              className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-dashed border-primary/30 rounded-lg"
            >
              <div className="text-center mb-3">
                <p className="text-2xl font-bold text-primary">{coupon.discount}</p>
                <p className="text-xs text-muted-foreground mt-1">Code: {coupon.code}</p>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Valid:</span>
                  <span className="font-medium text-foreground">{coupon.valid}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Used:</span>
                  <span className="font-medium text-foreground">
                    {coupon.used}/{coupon.total}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h4 className="font-semibold text-foreground mb-3">Marketing Features:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Automated SMS campaigns based on customer behavior</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Targeted push notifications for app users</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Seasonal and event-based discount campaigns</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p>Referral program with automatic coupon generation</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
