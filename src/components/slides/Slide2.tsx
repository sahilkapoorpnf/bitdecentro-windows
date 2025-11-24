import { MobileFrame } from "@/components/MobileFrame";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload, Camera, Ruler } from "lucide-react";

export const Slide2 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Window Details</h2>
            <p className="text-xs opacity-90">Step 1 of 5</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <Label className="text-foreground">Height (cm)</Label>
                <Input placeholder="150" className="mt-1" />
              </div>

              <div>
                <Label className="text-foreground">Width (cm)</Label>
                <Input placeholder="120" className="mt-1" />
              </div>

              <div>
                <Label className="text-foreground">Number of Windows</Label>
                <Input type="number" placeholder="1" className="mt-1" />
              </div>
            </div>

            <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Upload Photos</h4>
                <p className="text-xs text-muted-foreground">
                  Take photos of your current windows
                </p>
              </div>
              <Button variant="outline" className="gap-2">
                <Upload className="h-4 w-4" />
                Choose Files
              </Button>
            </div>

            <div className="bg-card border rounded-xl p-4">
              <div className="flex items-start gap-3">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Ruler className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground mb-1">
                    Need Help Measuring?
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Schedule a technician visit for accurate measurements
                  </p>
                  <Button variant="link" className="h-auto p-0 text-primary text-xs">
                    Schedule Visit →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <Button className="w-full bg-gradient-to-r from-primary to-primary-dark">
              Continue
            </Button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Size Entry & Photo Upload</h3>
        <p className="text-muted-foreground leading-relaxed">
          Customers provide window dimensions and upload photos. If they need help with measurements, 
          they can easily schedule a technician visit for accurate sizing.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Simple measurement input</li>
            <li>• Photo upload functionality</li>
            <li>• Technician visit option</li>
            <li>• Progress indicator</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
