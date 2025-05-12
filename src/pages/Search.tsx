
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageContainer from "@/components/layout/PageContainer";
import BottomNavigation from "@/components/layout/BottomNavigation";
import RestaurantList from "@/components/restaurant/RestaurantList";
import { restaurants, categories } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);
  
  // Extract category from URL query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, [location.search]);
  
  // Filter restaurants based on search term and selected categories
  useEffect(() => {
    const filtered = restaurants.filter(restaurant => {
      const matchesSearchTerm = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                               restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase());
                               
      const matchesCategories = selectedCategories.length === 0 || 
                              selectedCategories.includes(restaurant.cuisine);
                              
      return matchesSearchTerm && matchesCategories;
    });
    
    setFilteredRestaurants(filtered);
  }, [searchTerm, selectedCategories]);
  
  const toggleCategory = (categoryName: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };
  
  return (
    <>
      <PageContainer>
        <h1 className="text-2xl font-bold mb-4">Search</h1>
        
        <div className="relative mb-6">
          <Input
            placeholder="Search restaurants or cuisines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        </div>
        
        <div className="mb-6">
          <h2 className="text-sm font-medium mb-2">Filter by cuisine:</h2>
          <div className="flex flex-wrap gap-2">
            {[...new Set(restaurants.map(r => r.cuisine))].map(cuisine => (
              <Badge
                key={cuisine}
                variant={selectedCategories.includes(cuisine) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => toggleCategory(cuisine)}
              >
                {cuisine}
              </Badge>
            ))}
            
            {selectedCategories.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => setSelectedCategories([])}
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>
        
        <RestaurantList 
          restaurants={filteredRestaurants} 
          title={`${filteredRestaurants.length} restaurants found`}
        />
      </PageContainer>
      <BottomNavigation />
    </>
  );
};

export default Search;
