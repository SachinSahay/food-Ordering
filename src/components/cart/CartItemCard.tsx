
import React from "react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types";
import { useCart } from "@/context/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react";
import { formatCurrency } from "@/lib/constants";

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-start space-x-4 py-4 border-b last:border-0">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={item.menuItem.image}
          alt={item.menuItem.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="font-medium">{item.menuItem.name}</h3>
          <span className="font-semibold">
            {formatCurrency(item.menuItem.price * item.quantity)}
          </span>
        </div>
        
        <p className="text-muted-foreground text-xs mt-1">
          {item.menuItem.description.substring(0, 60)}
          {item.menuItem.description.length > 60 ? "..." : ""}
        </p>
        
        {item.specialInstructions && (
          <p className="text-xs italic text-muted-foreground mt-1">
            Note: {item.specialInstructions}
          </p>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
            >
              <Minus size={14} />
            </Button>
            
            <span className="font-medium w-6 text-center">
              {item.quantity}
            </span>
            
            <Button
              size="icon"
              variant="outline"
              className="h-7 w-7"
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:bg-red-50 hover:text-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
