
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Clock, MapPin, CreditCard } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { formatCurrency } from "@/lib/constants";

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { orders } = useUser();
  
  const order = orders.find(o => o.id === id);
  
  if (!order) {
    return (
      <PageContainer>
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">Order not found</h2>
          <Button variant="link" onClick={() => navigate("/profile/orders")}>
            View all orders
          </Button>
        </div>
      </PageContainer>
    );
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "preparing":
        return "bg-amber-100 text-amber-800 border-amber-200";
      case "out_for_delivery":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "delivered":
        return "bg-green-100 text-green-800 border-green-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };
  
  const formatStatus = (status: string) => {
    switch (status) {
      case "out_for_delivery":
        return "Out for delivery";
      default:
        return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <>
      <PageContainer>
        <div className="flex items-center mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2"
            onClick={() => navigate("/profile/orders")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">Order Details</h1>
        </div>
        
        <div className="bg-muted/40 rounded-lg p-4 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-muted-foreground">
                Order #{order.id.split('-')[1]}
              </p>
              <p className="font-medium">
                {format(new Date(order.createdAt), "MMM d, yyyy 'at' h:mm a")}
              </p>
            </div>
            <Badge variant="outline" className={getStatusColor(order.status)}>
              {formatStatus(order.status)}
            </Badge>
          </div>
          
          {order.estimatedDelivery && order.status !== "delivered" && order.status !== "cancelled" && (
            <div className="mt-4 flex items-center text-sm">
              <Clock size={14} className="mr-1" />
              <span>
                Est. delivery by {format(new Date(order.estimatedDelivery), "h:mm a")}
              </span>
            </div>
          )}
        </div>
        
        <h2 className="text-lg font-semibold mb-3">Order Items</h2>
        <div className="space-y-3 mb-6">
          {order.items.map(item => (
            <div key={item.id} className="flex justify-between">
              <div className="flex-1">
                <p>{item.quantity}x {item.menuItem.name}</p>
                {item.specialInstructions && (
                  <p className="text-xs italic text-muted-foreground">
                    Note: {item.specialInstructions}
                  </p>
                )}
              </div>
              <p className="font-medium">
                {formatCurrency(item.quantity * item.menuItem.price)}
              </p>
            </div>
          ))}
          
          <Separator />
          
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{formatCurrency(order.total)}</span>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <MapPin size={16} className="mr-2" />
              <h3 className="font-semibold">Delivery Address</h3>
            </div>
            <div className="bg-muted/40 rounded-md p-3">
              <p className="font-medium">{order.deliveryAddress.name}</p>
              <p className="text-sm text-muted-foreground">
                {order.deliveryAddress.line1}
                {order.deliveryAddress.line2 && `, ${order.deliveryAddress.line2}`}
              </p>
              <p className="text-sm text-muted-foreground">
                {order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.postalCode}
              </p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <CreditCard size={16} className="mr-2" />
              <h3 className="font-semibold">Payment Method</h3>
            </div>
            <div className="bg-muted/40 rounded-md p-3">
              <p>{order.paymentMethod.name}</p>
            </div>
          </div>
        </div>
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default OrderDetail;
