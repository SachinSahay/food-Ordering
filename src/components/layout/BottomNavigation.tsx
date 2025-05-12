
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Search, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

const BottomNavigation = () => {
  const location = useLocation();
  const { totalItems } = useCart();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-white border-t border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <Link to="/" className={`bottom-nav-item ${isActive("/") ? "active" : ""}`}>
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        
        <Link to="/search" className={`bottom-nav-item ${isActive("/search") ? "active" : ""}`}>
          <Search size={24} />
          <span className="text-xs">Search</span>
        </Link>
        
        <Link to="/cart" className={`bottom-nav-item ${isActive("/cart") ? "active" : ""}`}>
          <div className="relative">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-2 flex items-center justify-center bg-food-primary text-white text-xs font-bold rounded-full w-5 h-5">
                {totalItems > 9 ? '9+' : totalItems}
              </div>
            )}
          </div>
          <span className="text-xs">Cart</span>
        </Link>
        
        <Link to="/profile" className={`bottom-nav-item ${isActive("/profile") ? "active" : ""}`}>
          <User size={24} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;
