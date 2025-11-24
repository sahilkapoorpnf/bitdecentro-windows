import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export const Slide5 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Schedule Appointment</h2>
            <p className="text-xs opacity-90">Step 4 of 5</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Select Date</h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Mon 25", "Tue 26", "Wed 27", "Thu 28", "Fri 29", "Sat 30"].map((date, i) => (
                  <button
                    key={i}
                    className={`p-3 rounded-lg border text-sm ${
                      i === 2
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Select Time Slot</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"].map((time, i) => (
                  <button
                    key={i}
                    className={`p-3 rounded-lg border text-sm ${
                      i === 1
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Select Installer</h3>
              </div>
              <div className="space-y-2">
                {[
                  { name: "Carlos Mendez", rating: "4.8", jobs: "127 jobs" },
                  { name: "Juan Rodriguez", rating: "4.9", jobs: "203 jobs" },
                ].map((installer, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg border cursor-pointer ${
                      i === 0
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 bg-primary/20" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-foreground">{installer.name}</p>
                        <p className="text-xs text-muted-foreground">
                          ⭐ {installer.rating} • {installer.jobs}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-lg font-semibold">
              Continue to Payment
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Easy Scheduling</h3>
        <p className="text-muted-foreground leading-relaxed">
          Customers pick their preferred date, time slot, and installer - just like booking a ride. 
          See installer ratings and experience before making a choice.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Calendar-based date selection</li>
            <li>• Flexible time slots</li>
            <li>• Installer profiles with ratings</li>
            <li>• Uber-like selection experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
