
import React from "react";
import { Utensils } from "lucide-react";

const AppHeader: React.FC = () => {
  return (
    <header className="bg-orange-100 py-3 px-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 text-white p-2 rounded-full">
            <Utensils size={20} className="text-white" />
          </div>
          <h1 className="text-xl font-bold text-orange-800">
            Food Ordering
          </h1>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
