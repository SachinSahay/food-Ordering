
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import AddressSelection from "@/components/checkout/AddressSelection";
import PaymentMethodSelection from "@/components/checkout/PaymentMethodSelection";
import OrderSummary from "@/components/checkout/OrderSummary";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Steps, Step } from "@/components/ui/steps";
import { useCart } from "@/context/CartContext";
import { useUser } from "@/context/UserContext";
import { toast } from "sonner";

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const { selectedAddress, selectedPaymentMethod, addOrder } = useUser();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  
  if (items.length === 0) {
    navigate("/cart");
    return null;
  }
  
  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address");
      setCurrentStep(0);
      return;
    }
    
    if (!selectedPaymentMethod) {
      toast.error("Please select a payment method");
      setCurrentStep(1);
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      const restaurantIds = [...new Set(items.map(item => item.menuItem.restaurantId))];
      
      const newOrder = addOrder({
        items: items,
        restaurantIds: restaurantIds,
        status: "confirmed",
        total: subtotal + 2.99, // Add delivery fee
        deliveryAddress: selectedAddress,
        paymentMethod: selectedPaymentMethod,
        estimatedDelivery: new Date(Date.now() + 40 * 60000).toISOString() // 40 minutes from now
      });
      
      clearCart();
      setIsProcessing(false);
      navigate(`/order/${newOrder.id}`);
      
      toast.success("Order placed successfully!");
    }, 1500);
  };
  
  const steps = [
    {
      title: "Delivery Address",
      content: (
        <AddressSelection 
          onAddNewClick={() => navigate("/profile/addresses/new")}
        />
      )
    },
    {
      title: "Payment Method",
      content: (
        <PaymentMethodSelection 
          onAddNewClick={() => navigate("/profile/payments/new")}
        />
      )
    },
    {
      title: "Review Order",
      content: (
        <>
          <OrderSummary showItems={true} />
          
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Delivery Address</h3>
            {selectedAddress ? (
              <div className="bg-muted/40 rounded-md p-3">
                <p className="font-medium">{selectedAddress.name}</p>
                <p className="text-sm text-muted-foreground">
                  {selectedAddress.line1}
                  {selectedAddress.line2 && `, ${selectedAddress.line2}`}
                </p>
                <p className="text-sm text-muted-foreground">
                  {selectedAddress.city}, {selectedAddress.state} {selectedAddress.postalCode}
                </p>
              </div>
            ) : (
              <p className="text-muted-foreground">No address selected</p>
            )}
            
            <h3 className="text-lg font-semibold">Payment Method</h3>
            {selectedPaymentMethod ? (
              <div className="bg-muted/40 rounded-md p-3">
                <p className="font-medium">{selectedPaymentMethod.name}</p>
              </div>
            ) : (
              <p className="text-muted-foreground">No payment method selected</p>
            )}
          </div>
        </>
      )
    }
  ];
  
  return (
    <>
      <PageContainer>
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        <Steps currentStep={currentStep} className="mb-8">
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setCurrentStep(index)}>
              {step.title}
            </Step>
          ))}
        </Steps>
        
        <div className="mb-8">
          {steps[currentStep].content}
        </div>
        
        <Separator />
        
        <div className="mt-6 flex space-x-4">
          {currentStep > 0 && (
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Back
            </Button>
          )}
          
          {currentStep < steps.length - 1 ? (
            <Button 
              className="flex-1"
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              Continue
            </Button>
          ) : (
            <Button 
              className="flex-1"
              disabled={isProcessing}
              onClick={handlePlaceOrder}
            >
              {isProcessing ? "Processing..." : "Place Order"}
            </Button>
          )}
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Checkout;
