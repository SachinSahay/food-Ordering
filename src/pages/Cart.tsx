
import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import CartItemCard from "@/components/cart/CartItemCard";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const { items, totalItems, clearCart } = useCart();
  const navigate = useNavigate();
  
  if (items.length === 0) {
    return (
      <>
        <PageContainer>
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          
          <div className="text-center py-10">
            <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Add items from restaurants to get started
            </p>
            <Button onClick={() => navigate("/")}>Browse Restaurants</Button>
          </div>
        </PageContainer>
        <BottomNavigation />
      </>
    );
  }
  
  return (
    <>
      <PageContainer>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Your Cart</h1>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>
        
        <div className="mb-6">
          {items.map(item => (
            <CartItemCard key={item.id} item={item} />
          ))}
        </div>
        
        <Separator />
        
        <div className="my-6">
          <OrderSummary />
        </div>
        
        <Button 
          className="w-full"
          size="lg"
          onClick={() => navigate("/checkout")}
        >
          Checkout ({totalItems} {totalItems === 1 ? "item" : "items"})
        </Button>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Cart;
