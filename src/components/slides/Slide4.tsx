import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Slide4 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Price Estimation</h2>
            <p className="text-xs opacity-90">Step 3 of 5</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            <Card className="p-4 bg-primary/5 border-primary/20">
              <h3 className="font-semibold text-foreground mb-3">Order Summary</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">2x PVC Windows</span>
                  <span className="font-medium text-foreground">$8,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Double Panel Glass</span>
                  <span className="font-medium text-foreground">$1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Soundproof Option</span>
                  <span className="font-medium text-foreground">$800</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-3">Service Charges</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Labor Cost</span>
                  <span className="font-medium text-foreground">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Travel Charges</span>
                  <span className="font-medium text-foreground">$400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Installation Kit</span>
                  <span className="font-medium text-foreground">$600</span>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-3">Add-ons</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Mosquito Net (x2)</span>
                  <span className="font-medium text-foreground">$300</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Security Locks</span>
                  <span className="font-medium text-foreground">$450</span>
                </div>
              </div>
            </Card>

            <Separator />

            <div className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs opacity-90 mb-1">Total Estimated Cost</p>
                  <p className="text-3xl font-bold">$14,650</p>
                  <p className="text-xs opacity-90 mt-1">MXN</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-lg font-semibold">
              Proceed to Schedule
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Instant Price Calculation</h3>
        <p className="text-muted-foreground leading-relaxed">
          The app automatically calculates the complete cost breakdown including materials, 
          labor, travel charges, and add-ons. Full transparency builds customer trust.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Detailed cost breakdown</li>
            <li>• Material and labor separation</li>
            <li>• Add-on customization</li>
            <li>• Instant total calculation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
