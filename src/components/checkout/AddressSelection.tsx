
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Address } from "@/types";
import { Button } from "@/components/ui/button";
import { MapPin, Plus } from "lucide-react";
import { useUser } from "@/context/UserContext";

interface AddressSelectionProps {
  onAddNewClick: () => void;
}

const AddressSelection: React.FC<AddressSelectionProps> = ({ onAddNewClick }) => {
  const { addresses, selectedAddress, setSelectedAddress } = useUser();

  if (!addresses.length) {
    return (
      <div className="text-center py-6">
        <MapPin className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
        <h3 className="text-lg font-medium">No saved addresses</h3>
        <p className="text-muted-foreground mb-4">Add a delivery address to continue</p>
        <Button onClick={onAddNewClick}>
          <Plus className="mr-2 h-4 w-4" />
          Add New Address
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <RadioGroup 
        value={selectedAddress?.id} 
        onValueChange={(value) => {
          const address = addresses.find(addr => addr.id === value);
          if (address) {
            setSelectedAddress(address);
          }
        }}
      >
        {addresses.map((address) => (
          <div
            key={address.id}
            className="flex items-start space-x-2 border rounded-md p-3 hover:bg-muted/50"
          >
            <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
            <div className="flex-1">
              <Label htmlFor={address.id} className="font-medium cursor-pointer">
                {address.name}
              </Label>
              <p className="text-sm text-muted-foreground">
                {address.line1}
                {address.line2 && `, ${address.line2}`}
              </p>
              <p className="text-sm text-muted-foreground">
                {address.city}, {address.state} {address.postalCode}
              </p>
              {address.isDefault && (
                <span className="inline-block mt-1 text-xs bg-muted px-2 py-0.5 rounded-full">
                  Default
                </span>
              )}
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
        Add New Address
      </Button>
    </div>
  );
};

export default AddressSelection;
