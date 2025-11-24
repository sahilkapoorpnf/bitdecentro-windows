import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MobileFrameProps {
  children: ReactNode;
  className?: string;
}

export const MobileFrame = ({ children, className }: MobileFrameProps) => {
  return (
    <div className={cn("relative mx-auto w-[340px] h-[680px]", className)}>
      {/* Phone frame */}
      <div className="absolute inset-0 bg-card rounded-[3rem] shadow-2xl border-[12px] border-foreground/10">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-3xl" />
        
        {/* Screen content */}
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-background">
          {children}
        </div>
      </div>
    </div>
  );
};
