
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { PaymentMethod } from "@/types";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus } from "lucide-react";
import { useUser } from "@/context/UserContext";

interface PaymentMethodSelectionProps {
  onAddNewClick: () => void;
}

const PaymentMethodSelection: React.FC<PaymentMethodSelectionProps> = ({ onAddNewClick }) => {
  const { paymentMethods, selectedPaymentMethod, setSelectedPaymentMethod } = useUser();

  if (!paymentMethods.length) {
    return (
      <div className="text-center py-6">
        <CreditCard className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
        <h3 className="text-lg font-medium">No payment methods</h3>
        <p className="text-muted-foreground mb-4">Add a payment method to continue</p>
        <Button onClick={onAddNewClick}>
          <Plus className="mr-2 h-4 w-4" />
          Add Payment Method
        </Button>
      </div>
    );
  }

  // Helper function to render payment method icon
  const renderPaymentIcon = (type: string) => {
    switch (type) {
      case 'card':
        return <CreditCard className="h-5 w-5 text-muted-foreground" />;
      case 'upi':
        return <span className="text-lg font-bold">UPI</span>;
      case 'wallet':
        return <span className="text-lg font-bold">W</span>;
      case 'cash':
        return <span className="text-lg font-bold">$</span>;
      default:
        return <CreditCard className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-4">
      <RadioGroup 
        value={selectedPaymentMethod?.id} 
        onValueChange={(value) => {
          const method = paymentMethods.find(m => m.id === value);
          if (method) {
            setSelectedPaymentMethod(method);
          }
        }}
      >
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center space-x-3 border rounded-md p-3 hover:bg-muted/50"
          >
            <RadioGroupItem value={method.id} id={method.id} />
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                {renderPaymentIcon(method.type)}
              </div>
              <Label htmlFor={method.id} className="cursor-pointer">
                <span className="font-medium">{method.name}</span>
                {method.isDefault && (
                  <span className="ml-2 text-xs bg-muted px-2 py-0.5 rounded-full">
                    Default
                  </span>
                )}
              </Label>
            </div>
          </div>
        ))}
      </RadioGroup>

      <Button 
        variant="outline" 
        className="w-full"
        onClick={onAddNewClick}
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Payment Method
      </Button>
    </div>
  );
};

export default PaymentMethodSelection;
