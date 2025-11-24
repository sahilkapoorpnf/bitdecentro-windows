import { MobileFrame } from "@/components/MobileFrame";
import { Card } from "@/components/ui/card";
import { CreditCard, Wallet, Building2, Banknote } from "lucide-react";

export const Slide6 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      <MobileFrame>
        <div className="h-full flex flex-col bg-background">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4">
            <h2 className="text-lg font-bold">Payment & Confirmation</h2>
            <p className="text-xs opacity-90">Step 5 of 5</p>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5">
              <h3 className="font-semibold text-foreground mb-2">Order Total</h3>
              <p className="text-3xl font-bold text-primary">$14,650 MXN</p>
              <p className="text-xs text-muted-foreground mt-1">Wed, Nov 27 • 11:00 AM</p>
            </Card>

            <div>
              <h3 className="font-semibold text-foreground mb-3">Payment Method</h3>
              <div className="space-y-2">
                <button className="w-full p-4 border-2 border-primary bg-primary/5 rounded-xl flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm text-foreground">Credit/Debit Card</p>
                    <p className="text-xs text-muted-foreground">Visa, Mastercard, Amex</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-primary bg-primary" />
                </button>

                <button className="w-full p-4 border rounded-xl flex items-center gap-3 hover:border-primary">
                  <div className="bg-muted p-2 rounded-lg">
                    <Banknote className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm text-foreground">Cash on Installation</p>
                    <p className="text-xs text-muted-foreground">Pay when work is done</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2" />
                </button>

                <button className="w-full p-4 border rounded-xl flex items-center gap-3 hover:border-primary">
                  <div className="bg-muted p-2 rounded-lg">
                    <Wallet className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm text-foreground">Digital Wallet</p>
                    <p className="text-xs text-muted-foreground">PayPal, Apple Pay</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2" />
                </button>

                <button className="w-full p-4 border rounded-xl flex items-center gap-3 hover:border-primary">
                  <div className="bg-muted p-2 rounded-lg">
                    <Building2 className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="text-left flex-1">
                    <p className="font-medium text-sm text-foreground">Bank Transfer</p>
                    <p className="text-xs text-muted-foreground">Direct transfer</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2" />
                </button>
              </div>
            </div>

            <Card className="p-4 bg-card border">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="bg-primary/10 p-1 rounded">
                  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p>Secure payment • Booking ID will be generated</p>
              </div>
            </Card>
          </div>

          <div className="p-4 border-t">
            <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 rounded-lg font-semibold">
              Confirm & Pay
            </button>
          </div>
        </div>
      </MobileFrame>

      <div className="max-w-md space-y-4">
        <h3 className="text-2xl font-bold text-foreground">Flexible Payment Options</h3>
        <p className="text-muted-foreground leading-relaxed">
          Multiple payment methods for customer convenience. After payment, customers receive 
          a booking ID and digital invoice automatically.
        </p>
        <div className="bg-card p-4 rounded-lg border">
          <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Multiple payment options</li>
            <li>• Secure payment gateway</li>
            <li>• Instant booking confirmation</li>
            <li>• Digital invoice generation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
