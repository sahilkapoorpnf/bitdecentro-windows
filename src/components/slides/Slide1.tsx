import { MobileFrame } from "@/components/MobileFrame";
import { Button } from "@/components/ui/button";
import { Wrench, RefreshCw, Package } from "lucide-react";
import logo from "@/assets/bitdecentro-logo.png";

export const Slide1 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-gradient-to-b from-primary/10 to-background">
          {/* App Header */}
          <div className="bg-primary text-primary-foreground p-6 pb-8">
            <div className="flex items-center gap-3 mb-2">
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold">Bitdecentro</h1>
                <p className="text-xs opacity-90">Installation App</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Welcome!
              </h2>
              <p className="text-sm text-muted-foreground">
                What service do you need today?
              </p>
            </div>

            {/* Service Options */}
            <div className="space-y-4">
              <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 hover:border-primary transition-all cursor-pointer shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Package className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">New Installation</h3>
                    <p className="text-sm text-muted-foreground">Install new windows</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-all cursor-pointer shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <RefreshCw className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">Replacement</h3>
                    <p className="text-sm text-muted-foreground">Replace old windows</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary transition-all cursor-pointer shadow-md">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    <Wrench className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground">Repair</h3>
                    <p className="text-sm text-muted-foreground">Fix existing windows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Homepage - Service Selection</h3>
        <p className="text-muted-foreground leading-relaxed">
          Customers start by selecting their service type: New Window Installation, Replacement, or Repair. 
          This simple interface guides them through the booking process.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Clear service categorization</li>
            <li>• Intuitive navigation</li>
            <li>• Brand identity showcase</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
