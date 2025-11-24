import { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/bitdecentro-logo.png";

interface SlideContainerProps {
  children: ReactNode;
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  slideTitle: string;
  slideNumber: number;
}

export const SlideContainer = ({
  children,
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  slideTitle,
  slideNumber,
}: SlideContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background flex flex-col">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Bitdecentro" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Bitdecentro Installation App</h1>
              <p className="text-sm text-muted-foreground">Window Installation Platform</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Slide {slideNumber} of {totalSlides}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <div className="w-full max-w-6xl">
          {/* Slide Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">{slideTitle}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
          </div>

          {/* Slide Content */}
          <div className="mb-12">{children}</div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="lg"
              onClick={onPrev}
              disabled={currentSlide === 0}
              className="gap-2"
            >
              <ChevronLeft className="h-5 w-5" />
              Previous
            </Button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30"
                  )}
                />
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              onClick={onNext}
              disabled={currentSlide === totalSlides - 1}
              className="gap-2 bg-gradient-to-r from-primary to-primary-dark"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
