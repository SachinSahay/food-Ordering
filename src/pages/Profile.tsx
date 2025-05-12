
import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@/context/UserContext";
import { User, Clock, MapPin, CreditCard, ChevronRight } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { user, addresses, paymentMethods } = useUser();
  
  if (!user) {
    return (
      <PageContainer>
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">User not found</h2>
        </div>
      </PageContainer>
    );
  }

  return (
    <>
      <PageContainer>
        <h1 className="text-2xl font-bold mb-6">Account</h1>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center">
            <User size={24} className="text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">{user.name}</h2>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-2">Recent Orders</h2>
            {user.orders && user.orders.length > 0 ? (
              <>
                <div className="space-y-3 mb-2">
                  {user.orders.slice(0, 2).map(order => (
                    <Button
                      key={order.id}
                      variant="outline"
                      className="w-full justify-start text-left h-auto py-3"
                      onClick={() => navigate(`/order/${order.id}`)}
                    >
                      <div className="flex items-start justify-between w-full">
                        <div className="flex items-center">
                          <Clock size={16} className="mr-3 text-muted-foreground" />
                          <div>
                            <p className="font-medium">Order #{order.id.split('-')[1]}</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-muted-foreground" />
                      </div>
                    </Button>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate("/profile/orders")}
                >
                  View all orders
                </Button>
              </>
            ) : (
              <p className="text-muted-foreground text-sm">No order history yet</p>
            )}
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Saved Addresses</h2>
            {addresses.length > 0 ? (
              <>
                <div className="space-y-3 mb-2">
                  {addresses.slice(0, 2).map(address => (
                    <div 
                      key={address.id} 
                      className="flex border rounded-md p-3"
                    >
                      <MapPin size={16} className="mr-3 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{address.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {address.line1}, {address.city}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate("/profile/addresses")}
                >
                  Manage addresses
                </Button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-4 border border-dashed rounded-md">
                <MapPin size={24} className="text-muted-foreground mb-2" />
                <p className="text-muted-foreground mb-2">No saved addresses</p>
                <Button 
                  size="sm"
                  onClick={() => navigate("/profile/addresses/new")}
                >
                  Add Address
                </Button>
              </div>
            )}
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-2">Payment Methods</h2>
            {paymentMethods.length > 0 ? (
              <>
                <div className="space-y-3 mb-2">
                  {paymentMethods.slice(0, 2).map(method => (
                    <div 
                      key={method.id} 
                      className="flex border rounded-md p-3"
                    >
                      <CreditCard size={16} className="mr-3 mt-0.5 text-muted-foreground" />
                      <p className="font-medium">{method.name}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate("/profile/payments")}
                >
                  Manage payment methods
                </Button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center p-4 border border-dashed rounded-md">
                <CreditCard size={24} className="text-muted-foreground mb-2" />
                <p className="text-muted-foreground mb-2">No payment methods</p>
                <Button 
                  size="sm"
                  onClick={() => navigate("/profile/payments/new")}
                >
                  Add Payment Method
                </Button>
              </div>
            )}
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Profile;
