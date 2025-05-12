
import React from "react";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";

interface OrderSummaryProps {
  showItems?: boolean;
  deliveryFee?: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ 
  showItems = true,
  deliveryFee = 2.99
}) => {
  const { items, subtotal } = useCart();
  
  // Group items by restaurant
  const itemsByRestaurant = items.reduce((acc, item) => {
    const restaurantId = item.menuItem.restaurantId;
    if (!acc[restaurantId]) {
      acc[restaurantId] = [];
    }
    acc[restaurantId].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  const total = subtotal + deliveryFee;
  const tax = subtotal * 0.07; // 7% tax

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Order Summary</h3>
      
      {showItems && Object.entries(itemsByRestaurant).length > 0 && (
        <div className="space-y-4">
          {Object.entries(itemsByRestaurant).map(([restaurantId, restaurantItems]) => (
            <div key={restaurantId} className="bg-muted/40 rounded-md p-3 space-y-2">
              <p className="font-medium text-sm">From Restaurant #{restaurantId}</p>
              {restaurantItems.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.quantity} × {item.menuItem.name}
                  </span>
                  <span>${(item.menuItem.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${(total + tax).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
