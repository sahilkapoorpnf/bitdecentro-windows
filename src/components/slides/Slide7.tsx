import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export const Slide7 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Technician Visit</h2>
            <p className="text-xs opacity-90">Booking #WI-2834</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Card className="p-4 border-2 border-primary/30 bg-primary/5">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-12 w-12 bg-primary/20" />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Carlos Mendez</p>
                  <p className="text-xs text-muted-foreground">Senior Technician • ⭐ 4.8</p>
                </div>
                <button className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <Phone className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Arriving in 10 minutes</span>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Visit Details
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Take Measurements</p>
                    <p className="text-xs text-muted-foreground">Accurate dimensions for windows</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Confirm Design</p>
                    <p className="text-xs text-muted-foreground">Review window specifications</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Price Adjustment</p>
                    <p className="text-xs text-muted-foreground">Final quote if needed</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">Get Approval</p>
                    <p className="text-xs text-muted-foreground">Customer confirmation</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card">
              <h4 className="text-sm font-semibold text-foreground mb-2">Expected Changes</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current Estimate:</span>
                  <span className="font-medium text-foreground">$14,650</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Adjusted Estimate:</span>
                  <span className="font-medium text-primary">TBD</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-muted text-foreground py-3 rounded-lg font-semibold">
              Waiting for Technician
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Professional Measurement Visit</h3>
        <p className="text-muted-foreground leading-relaxed">
          Technician arrives for accurate measurements and design confirmation. Any price 
          adjustments are discussed and require customer approval before proceeding.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Real-time technician tracking</li>
            <li>• Direct call functionality</li>
            <li>• Step-by-step visit process</li>
            <li>• Price transparency</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
