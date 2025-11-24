import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export const Slide3 = () => {
  const windowTypes = [
    { name: "Aluminum", price: "$3,500 MXN", features: ["Durable", "Lightweight"], popular: false },
    { name: "PVC", price: "$4,200 MXN", features: ["Energy Efficient", "Low Maintenance"], popular: true },
    { name: "Wood", price: "$5,800 MXN", features: ["Classic Look", "Insulation"], popular: false },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Choose Window Type</h2>
            <p className="text-xs opacity-90">Step 2 of 5</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {windowTypes.map((type, index) => (
              <Card
                key={index}
                className={`p-4 cursor-pointer transition-all border-2 ${
                  type.popular ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-foreground">{type.name}</h3>
                    <p className="text-sm text-primary font-semibold">{type.price}</p>
                  </div>
                  {type.popular && (
                    <Badge className="bg-primary">Popular</Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {type.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}

            <div className="pt-4 border-t">
              <h4 className="font-semibold text-sm mb-3 text-foreground">Additional Options</h4>
              <div className="grid grid-cols-2 gap-2">
                {["Double Panel", "Triple Panel", "Tinted Glass", "Clear Glass", "Soundproof", "UV Protection"].map((option, i) => (
                  <div key={i} className="border rounded-lg p-3 text-center hover:border-primary cursor-pointer transition-all">
                    <p className="text-xs font-medium text-foreground">{option}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-lg font-semibold">
              Continue
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Window Type Selection</h3>
        <p className="text-muted-foreground leading-relaxed">
          Browse different window materials and features. Each option shows pricing, 
          key benefits, and available customizations like panel count, tinting, and soundproofing.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Material comparison (Aluminum, PVC, Wood)</li>
            <li>• Real-time pricing display</li>
            <li>• Popular recommendations</li>
            <li>• Customization options</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
