import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { Star, Camera, MessageSquare } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export const Slide10 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Rate Your Experience</h2>
            <p className="text-xs opacity-90">Help others make informed decisions</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Card className="p-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Avatar className="h-12 w-12 bg-primary/20" />
                <div className="text-left">
                  <p className="font-semibold text-foreground">Carlos Mendez</p>
                  <p className="text-xs text-muted-foreground">Your Technician</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">How was your service?</p>
              
              {/* Star Rating */}
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="focus:outline-none hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`h-10 w-10 ${
                        star <= 4
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Tap to rate</p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">Write a Review</h3>
              </div>
              <textarea
                placeholder="Share your experience with the service..."
                className="w-full min-h-[120px] p-3 rounded-lg border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Optional but helps other customers
              </p>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">Add Photos</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="aspect-square border-2 border-dashed rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                  <Camera className="h-6 w-6 text-muted-foreground" />
                </button>
                <div className="aspect-square bg-card rounded-lg border" />
                <div className="aspect-square bg-card rounded-lg border" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Show off your new windows!
              </p>
            </Card>

            <Card className="p-4 bg-primary/5 border-primary/30">
              <h4 className="font-semibold text-sm text-foreground mb-2">Your review helps:</h4>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• Other customers make informed decisions</li>
                <li>• Technicians improve their service</li>
                <li>• Our team maintain quality standards</li>
              </ul>
            </Card>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-lg font-semibold">
              Submit Review
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Ratings & Reviews</h3>
        <p className="text-muted-foreground leading-relaxed">
          Customers rate their experience with 1-5 stars, write detailed reviews, and upload 
          photos. This builds trust and helps future customers make confident decisions.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 5-star rating system</li>
            <li>• Written review collection</li>
            <li>• Photo upload capability</li>
            <li>• Helps build brand trust</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
