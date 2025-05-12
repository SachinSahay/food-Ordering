
import React from "react";
import { Button } from "@/components/ui/button";
import { MenuItem as MenuItemType } from "@/types";
import { useCart } from "@/context/CartContext";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { addToCart } = useCart();

  return (
    <div className="menu-item-card">
      <div className="flex-1">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            {item.isVegetarian && (
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 mt-1">
                Vegetarian
              </Badge>
            )}
          </div>
          <span className="font-semibold text-food-dark">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
          {item.description}
        </p>
        
        <Button 
          variant="ghost" 
          className="mt-2 text-food-primary hover:text-food-primary hover:bg-food-primary/10"
          onClick={() => addToCart(item)}
        >
          Add to cart
        </Button>
      </div>
      
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default MenuItem;
