
import React, { createContext, useContext, useState, useEffect } from "react";
import { User, Address, PaymentMethod, Order } from "../types";
import { savedAddresses, paymentMethods } from "../data/mockData";

interface UserContextType {
  user: User | null;
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  orders: Order[];
  selectedAddress: Address | null;
  selectedPaymentMethod: PaymentMethod | null;
  setSelectedAddress: (address: Address) => void;
  setSelectedPaymentMethod: (method: PaymentMethod) => void;
  addAddress: (address: Omit<Address, "id">) => void;
  addPaymentMethod: (method: Omit<PaymentMethod, "id">) => void;
  addOrder: (order: Omit<Order, "id" | "createdAt">) => void;
}

const defaultUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john@example.com",
  phone: "555-123-4567",
  addresses: savedAddresses,
  paymentMethods: paymentMethods,
  orders: []
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);

  // Load user data from localStorage or initialize with default
  useEffect(() => {
    const savedUser = localStorage.getItem("foodDeliveryUser");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        
        // Set default selections
        const defaultAddr = parsedUser.addresses.find((addr: Address) => addr.isDefault) || 
                         (parsedUser.addresses.length > 0 ? parsedUser.addresses[0] : null);
        
        const defaultPayment = parsedUser.paymentMethods.find((pm: PaymentMethod) => pm.isDefault) ||
                            (parsedUser.paymentMethods.length > 0 ? parsedUser.paymentMethods[0] : null);
        
        setSelectedAddress(defaultAddr);
        setSelectedPaymentMethod(defaultPayment);
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
        initializeDefaultUser();
      }
    } else {
      initializeDefaultUser();
    }
  }, []);

  const initializeDefaultUser = () => {
    setUser(defaultUser);
    
    const defaultAddr = defaultUser.addresses.find(addr => addr.isDefault) || 
                     (defaultUser.addresses.length > 0 ? defaultUser.addresses[0] : null);
    
    const defaultPayment = defaultUser.paymentMethods.find(pm => pm.isDefault) ||
                        (defaultUser.paymentMethods.length > 0 ? defaultUser.paymentMethods[0] : null);
    
    setSelectedAddress(defaultAddr);
    setSelectedPaymentMethod(defaultPayment);
  };

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("foodDeliveryUser", JSON.stringify(user));
    }
  }, [user]);

  const addAddress = (address: Omit<Address, "id">) => {
    if (!user) return;
    
    const newAddress: Address = {
      ...address,
      id: `addr-${Date.now()}`
    };
    
    setUser({
      ...user,
      addresses: [...user.addresses, newAddress]
    });
    
    if (!selectedAddress) {
      setSelectedAddress(newAddress);
    }
  };

  const addPaymentMethod = (method: Omit<PaymentMethod, "id">) => {
    if (!user) return;
    
    const newMethod: PaymentMethod = {
      ...method,
      id: `pm-${Date.now()}`
    };
    
    setUser({
      ...user,
      paymentMethods: [...user.paymentMethods, newMethod]
    });
    
    if (!selectedPaymentMethod) {
      setSelectedPaymentMethod(newMethod);
    }
  };

  const addOrder = (orderData: Omit<Order, "id" | "createdAt">) => {
    if (!user) return;
    
    const newOrder: Order = {
      ...orderData,
      id: `order-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    
    setUser({
      ...user,
      orders: [newOrder, ...user.orders]
    });
    
    return newOrder;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        addresses: user?.addresses || [],
        paymentMethods: user?.paymentMethods || [],
        orders: user?.orders || [],
        selectedAddress,
        selectedPaymentMethod,
        setSelectedAddress,
        setSelectedPaymentMethod,
        addAddress,
        addPaymentMethod,
        addOrder
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
