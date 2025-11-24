import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone, Calendar, TrendingUp, MessageSquare } from "lucide-react";

export const Slide14 = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-2">Customer CRM</h3>
        <p className="text-muted-foreground">Manage customer relationships and boost retention</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-4">
          <p className="text-2xl font-bold text-foreground">1,247</p>
          <p className="text-sm text-muted-foreground mt-1">Total Customers</p>
        </Card>
        <Card className="p-4 bg-primary/5 border-primary/30">
          <p className="text-2xl font-bold text-primary">342</p>
          <p className="text-sm text-muted-foreground mt-1">Active This Month</p>
        </Card>
        <Card className="p-4">
          <p className="text-2xl font-bold text-foreground">89</p>
          <p className="text-sm text-muted-foreground mt-1">New Leads</p>
        </Card>
        <Card className="p-4">
          <p className="text-2xl font-bold text-foreground">67%</p>
          <p className="text-sm text-muted-foreground mt-1">Repeat Rate</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {[
          { name: "Maria Garcia", phone: "+52 55 1234 5678", email: "maria@email.com", jobs: 3, spent: "$42,300", lastJob: "2 weeks ago" },
          { name: "Diego Hernandez", phone: "+52 55 8765 4321", email: "diego@email.com", jobs: 1, spent: "$14,200", lastJob: "1 month ago" },
          { name: "Sofia Martinez", phone: "+52 55 5555 1234", email: "sofia@email.com", jobs: 2, spent: "$28,600", lastJob: "3 days ago" },
        ].map((customer) => (
          <Card key={customer.name} className="p-4 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3 mb-3">
              <Avatar className="h-12 w-12 bg-primary/20" />
              <div className="flex-1">
                <p className="font-semibold text-foreground">{customer.name}</p>
                <div className="flex gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs">{customer.jobs} jobs</Badge>
                  <Badge className="text-xs">{customer.spent}</Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">{customer.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">{customer.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-3 w-3 text-muted-foreground" />
                <span className="text-muted-foreground">Last job: {customer.lastJob}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                View History
              </button>
              <button className="p-2 border rounded-lg hover:bg-muted transition-colors">
                <MessageSquare className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Lead History
          </h4>
          <div className="space-y-3">
            {[
              { name: "Isabella Lopez", source: "Google Ads", date: "Today", status: "new" },
              { name: "Carlos Ramirez", source: "Referral", date: "Yesterday", status: "contacted" },
              { name: "Ana Torres", source: "Facebook", date: "2 days ago", status: "quoted" },
            ].map((lead, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-foreground">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.source} • {lead.date}</p>
                </div>
                <Badge variant={lead.status === "new" ? "default" : "secondary"}>
                  {lead.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold text-foreground mb-4">Quotation History</h4>
          <div className="space-y-3">
            {[
              { customer: "Maria Garcia", quote: "$21,400", date: "Nov 20", status: "Accepted" },
              { customer: "Diego Hernandez", quote: "$14,200", date: "Nov 22", status: "Pending" },
              { customer: "Sofia Martinez", quote: "$18,900", date: "Nov 24", status: "Sent" },
            ].map((quote, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium text-sm text-foreground">{quote.customer}</p>
                  <p className="text-xs text-muted-foreground">{quote.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">{quote.quote}</p>
                  <Badge variant="outline" className="text-xs">{quote.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6 mt-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/30">
        <h4 className="font-semibold text-foreground mb-3">Automated Reminders</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p className="text-muted-foreground">Follow-up on pending quotes after 3 days</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p className="text-muted-foreground">Maintenance reminders after 6 months</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p className="text-muted-foreground">Birthday wishes with special discount</p>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-2 h-2 bg-primary rounded-full mt-1.5" />
            <p className="text-muted-foreground">Warranty expiry notifications</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
