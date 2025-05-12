
import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "@/types";
import { Star, Clock } from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card block">
      <div className="relative h-44 w-full overflow-hidden rounded-t-lg">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {restaurant.isPopular && (
          <div className="absolute top-2 left-2">
            <span className="badge badge-primary">Popular</span>
          </div>
        )}
      </div>
      
      <div className="p-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg truncate">{restaurant.name}</h3>
          <div className="flex items-center text-amber-500 ml-2">
            <Star size={16} className="fill-current" />
            <span className="ml-1 text-sm font-semibold">{restaurant.rating}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm mb-1">{restaurant.cuisine}</p>
        
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock size={14} className="mr-1" />
            <span>{restaurant.deliveryTime} mins</span>
          </div>
          <span className="text-sm">
            {restaurant.deliveryFee === 0 
              ? "Free delivery" 
              : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
