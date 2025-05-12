
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import MenuItem from "@/components/menu/MenuItem";
import { restaurants, menuItems } from "@/data/mockData";
import { ArrowLeft, Star, Clock } from "lucide-react";

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const restaurant = restaurants.find(r => r.id === id);
  const menu = id ? menuItems[id] || [] : [];
  
  // Group menu items by category
  const menuByCategory = menu.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof menu>);
  
  if (!restaurant) {
    return (
      <PageContainer>
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">Restaurant not found</h2>
          <Button variant="link" onClick={() => navigate("/")}>
            Go back to home
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <>
      <div className="relative h-56 w-full">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="h-full w-full object-cover"
        />
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute top-4 left-4 bg-white rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <PageContainer className="pt-6">
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-bold">{restaurant.name}</h1>
            <div className="flex items-center text-amber-500">
              <Star size={18} className="fill-current" />
              <span className="ml-1 font-semibold">{restaurant.rating}</span>
            </div>
          </div>
          
          <p className="text-muted-foreground">{restaurant.cuisine}</p>
          
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Clock size={14} className="mr-1" />
            <span>{restaurant.deliveryTime} mins delivery time</span>
            <span className="mx-2">•</span>
            <span>
              {restaurant.deliveryFee === 0 
                ? "Free delivery" 
                : `$${restaurant.deliveryFee.toFixed(2)} delivery`}
            </span>
          </div>
        </div>
        
        <Separator className="my-4" />
        
        {Object.entries(menuByCategory).map(([category, categoryItems]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{category}</h2>
            <div className="space-y-3">
              {categoryItems.map((item) => (
                <MenuItem key={item.id} item={item} />
              ))}
            </div>
          </div>
        ))}
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default RestaurantDetail;
