
import React from "react";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import CategoryList from "@/components/restaurant/CategoryList";
import RestaurantList from "@/components/restaurant/RestaurantList";
import { restaurants, categories } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Index = () => {
  const featuredRestaurants = restaurants.filter(r => r.isFeatured);
  const popularRestaurants = restaurants.filter(r => r.isPopular);
  
  return (
    <>
      <PageContainer>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold text-orange-800">Discover</h1>
            <p className="text-muted-foreground">Order delicious Indian food</p>
          </div>
          <Button variant="outline" size="icon" asChild>
            <a href="/search">
              <Search className="h-4 w-4" />
            </a>
          </Button>
        </div>
        
        <RestaurantList 
          restaurants={featuredRestaurants} 
          title="Featured Restaurants" 
        />
        
        <RestaurantList 
          restaurants={popularRestaurants} 
          title="Popular Near You" 
        />
        
        <CategoryList categories={categories} />
        
        <RestaurantList 
          restaurants={restaurants} 
          title="All Restaurants" 
        />
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Index;
