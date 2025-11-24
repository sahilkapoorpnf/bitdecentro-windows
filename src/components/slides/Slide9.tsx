import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { FileCheck, Download, Shield, Camera } from "lucide-react";

export const Slide9 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground p-4">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle2 className="h-5 w-5" />
              <h2 className="text-lg font-bold">Installation Complete!</h2>
            </div>
            <p className="text-xs opacity-90">Ready for inspection</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Card className="p-4 bg-primary/5 border-primary/30">
              <h3 className="font-semibold text-foreground mb-3">Final Inspection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Please inspect the installation quality before signing off
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-video bg-card rounded-lg border flex items-center justify-center">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="aspect-video bg-card rounded-lg border flex items-center justify-center">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
              <button className="w-full mt-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                View All Photos (8)
              </button>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <FileCheck className="h-4 w-4 text-primary" />
                Sign Completion Form
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                Digital signature confirms work completion
              </p>
              <div className="bg-muted rounded-lg p-8 mb-3 flex items-center justify-center border-2 border-dashed">
                <p className="text-sm text-muted-foreground">Signature Pad</p>
              </div>
              <button className="w-full py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                Sign & Approve
              </button>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
              <div className="flex items-start gap-3">
                <div className="bg-accent/20 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-foreground mb-1">2-Year Warranty Activated</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    Your windows are now covered for 2 years from today
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <Download className="h-3 w-3 text-accent" />
                      <button className="text-accent font-medium">Download Warranty Card</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-3 w-3 text-accent" />
                      <button className="text-accent font-medium">Download Invoice</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Download className="h-3 w-3 text-accent" />
                      <button className="text-accent font-medium">Download Before/After Photos</button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-lg font-semibold">
              Complete & Rate Service
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Quality Inspection & Warranty</h3>
        <p className="text-muted-foreground leading-relaxed">
          Customers review the work, sign digitally, and warranty is automatically activated. 
          All documents (warranty, invoice, photos) are downloadable instantly.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Photo documentation</li>
            <li>• Digital signature capture</li>
            <li>• Automatic warranty activation</li>
            <li>• Downloadable documents</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const CheckCircle2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
