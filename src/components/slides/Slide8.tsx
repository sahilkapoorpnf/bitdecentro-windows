import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export const Slide8 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Installation Progress</h2>
            <p className="text-xs opacity-90">Booking #WI-2834</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-2">
                  <Clock className="h-4 w-4 animate-pulse" />
                  <span className="text-sm font-medium">In Progress</span>
                </div>
                <p className="text-xs text-muted-foreground">Installation started 45 mins ago</p>
              </div>
            </Card>

            <div className="space-y-3">
              {/* Completed */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-foreground">Material Purchased</p>
                    <span className="text-xs text-primary font-medium">Completed</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">All materials sourced and ready</p>
                  <div className="bg-card p-2 rounded-lg border text-xs text-muted-foreground">
                    <p>✓ 2x PVC Window Frames</p>
                    <p>✓ Double Panel Glass</p>
                    <p>✓ Installation Hardware</p>
                  </div>
                </div>
              </div>

              <div className="h-8 w-px bg-primary ml-5" />

              {/* Completed */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-foreground">Team On The Way</p>
                    <span className="text-xs text-primary font-medium">Completed</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Installation team arrived at 10:45 AM</p>
                </div>
              </div>

              <div className="h-8 w-px bg-primary ml-5" />

              {/* In Progress */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-semibold text-foreground">Installation Started</p>
                    <span className="text-xs text-primary font-medium">45 mins ago</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Installing window frames and glass panels</p>
                  <div className="bg-primary/5 rounded-full h-2 overflow-hidden">
                    <div className="bg-primary h-full w-2/3 rounded-full" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Estimated: 1 hour remaining</p>
                </div>
              </div>

              <div className="h-8 w-px bg-border ml-5" />

              {/* Pending */}
              <div className="flex items-start gap-3 opacity-50">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Circle className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="font-semibold text-foreground">Installation Completed</p>
                  <p className="text-xs text-muted-foreground">Quality check and cleanup</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-muted text-foreground py-3 rounded-lg font-semibold">
              Track Live Progress
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Real-Time Installation Tracking</h3>
        <p className="text-muted-foreground leading-relaxed">
          Customers receive live updates at each stage: material purchase, team dispatch, 
          installation progress, and completion. Full transparency throughout the process.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Step-by-step progress tracking</li>
            <li>• Real-time status updates</li>
            <li>• Estimated completion time</li>
            <li>• Visual progress indicators</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
