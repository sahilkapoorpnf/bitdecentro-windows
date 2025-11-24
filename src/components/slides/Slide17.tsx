import { Card } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Star, Zap, Target, BarChart3, RefreshCw } from "lucide-react";

export const Slide17 = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-foreground mb-3">
          How This App Grows Your Business
        </h3>
        <p className="text-xl text-muted-foreground">
          Transform your window installation business with digital automation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                More Orders Without Extra Effort
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Instant price estimates increase conversions</li>
                <li>✓ Easy booking process reduces friction</li>
                <li>✓ 24/7 automated quotation system</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-accent/20 p-3 rounded-xl">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Build Customer Trust
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Live tracking increases credibility</li>
                <li>✓ Digital invoices and photos</li>
                <li>✓ Complete transparency at every step</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Faster Turnaround Time
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Eliminates manual follow-ups</li>
                <li>✓ Reduces measurement delays</li>
                <li>✓ Removes pricing confusion</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <RefreshCw className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Generate Repeat Business
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Annual maintenance reminders</li>
                <li>✓ Window cleaning notifications</li>
                <li>✓ Replacement suggestions = Consistent revenue</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-accent/20 p-3 rounded-xl">
              <Users className="h-8 w-8 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Strong Online Presence
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Social media integration</li>
                <li>✓ Google Ads lead funnel</li>
                <li>✓ Reviews attract new buyers</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Upsell Opportunities
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Mosquito nets suggestions</li>
                <li>✓ Soundproof glass upgrades</li>
                <li>✓ Premium frames = Higher order value</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-primary/20 p-3 rounded-xl">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Better Technician Productivity
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Clear daily schedules</li>
                <li>✓ Route optimization</li>
                <li>✓ More jobs per day, lower costs</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-accent/20 p-3 rounded-xl">
              <BarChart3 className="h-8 w-8 text-accent" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-foreground mb-2">
                Complete Data Insights
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✓ Top-selling window types</li>
                <li>✓ Most profitable locations</li>
                <li>✓ Better decision-making with data</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-8 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground text-center">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Transform Your Window Installation Business?
        </h3>
        <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
          Join successful businesses using Bitdecentro Installation App to streamline operations, 
          delight customers, and grow revenue consistently.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-3xl font-bold">3x</p>
            <p className="text-sm opacity-90">More Bookings</p>
          </div>
          <div className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-3xl font-bold">50%</p>
            <p className="text-sm opacity-90">Time Saved</p>
          </div>
          <div className="bg-primary-foreground/20 backdrop-blur-sm px-6 py-3 rounded-lg">
            <p className="text-3xl font-bold">95%</p>
            <p className="text-sm opacity-90">Customer Satisfaction</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
