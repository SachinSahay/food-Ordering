
import React from "react";
import { cn } from "@/lib/utils";
import AppHeader from "./AppHeader";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  hasBottomNav?: boolean;
  showHeader?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({ 
  children, 
  className,
  hasBottomNav = true,
  showHeader = true
}) => {
  return (
    <>
      {showHeader && <AppHeader />}
      <main 
        className={cn(
          "mx-auto max-w-md pt-4 px-4 pb-20", 
          hasBottomNav && "mb-16",
          className
        )}
      >
        {children}
      </main>
    </>
  );
};

export default PageContainer;
