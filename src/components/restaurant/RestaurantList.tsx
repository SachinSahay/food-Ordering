
import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Restaurant } from "@/types";

interface RestaurantListProps {
  restaurants: Restaurant[];
  title?: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ 
  restaurants,
  title
}) => {
  if (restaurants.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No restaurants found</p>
      </div>
    );
  }

  return (
    <div className="my-4">
      {title && (
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
