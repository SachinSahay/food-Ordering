
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StepsProps {
  currentStep: number;
  children: React.ReactNode;
  className?: string;
}

interface StepProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Steps: React.FC<StepsProps> = ({ 
  children, 
  currentStep,
  className
}) => {
  const [width, setWidth] = useState(0);
  const [steps, setSteps] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    // Filter out non-Step children
    const filteredChildren = React.Children.toArray(children)
      .filter((child) => React.isValidElement(child) && child.type === Step)
      .map((child) => child as React.ReactElement);
    
    setSteps(filteredChildren);
  }, [children]);

  useEffect(() => {
    if (steps.length === 0) return;
    
    // Calculate the progress width based on current step
    const newWidth = ((currentStep + 1) / steps.length) * 100;
    setWidth(newWidth);
  }, [currentStep, steps]);

  return (
    <div className={cn("relative", className)}>
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;
          
          return (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center",
                { "cursor-pointer": Boolean(step.props.onClick) }
              )}
              onClick={step.props.onClick}
            >
              <div 
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  isActive && "bg-primary text-white",
                  isCompleted && "bg-primary/80 text-white",
                  !isActive && !isCompleted && "bg-muted text-muted-foreground"
                )}
              >
                {index + 1}
              </div>
              <span 
                className={cn(
                  "text-xs mt-1 font-medium",
                  isActive && "text-primary",
                  !isActive && "text-muted-foreground"
                )}
              >
                {step.props.children}
              </span>
            </div>
          );
        })}
      </div>

      <div className="relative h-1 w-full bg-muted">
        <div 
          className="absolute left-0 top-0 h-1 bg-primary transition-all duration-300"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const Step: React.FC<StepProps> = ({ children, onClick }) => {
  return <>{children}</>;
};
