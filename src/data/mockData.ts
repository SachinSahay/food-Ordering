
import { Restaurant, MenuItem, Category, Address, PaymentMethod } from "../types";

export const categories: Category[] = [
  {
    id: "1",
    name: "Pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Sushi",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Indian",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Italian",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Mexican",
    image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=320&auto=format&fit=crop",
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Pizza Haven",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=640&auto=format&fit=crop",
    cuisine: "Italian",
    rating: 4.7,
    deliveryFee: 2.99,
    deliveryTime: "20-30",
    isPopular: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=640&auto=format&fit=crop",
    cuisine: "American",
    rating: 4.5,
    deliveryFee: 1.99,
    deliveryTime: "15-25",
    isPopular: true
  },
  {
    id: "3",
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1617196034183-421b4f3e7c62?q=80&w=640&auto=format&fit=crop",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryFee: 3.99,
    deliveryTime: "25-40",
    isFeatured: true
  },
  {
    id: "4",
    name: "Taco Express",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=640&auto=format&fit=crop",
    cuisine: "Mexican",
    rating: 4.2,
    deliveryFee: 1.49,
    deliveryTime: "15-25"
  },
  {
    id: "5",
    name: "Curry House",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=640&auto=format&fit=crop",
    cuisine: "Indian",
    rating: 4.6,
    deliveryFee: 2.49,
    deliveryTime: "30-45",
    isPopular: true
  },
  {
    id: "6",
    name: "Noodle Bar",
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=640&auto=format&fit=crop",
    cuisine: "Chinese",
    rating: 4.3,
    deliveryFee: 1.99,
    deliveryTime: "20-35"
  }
];

export const menuItems: { [key: string]: MenuItem[] } = {
  "1": [ // Pizza Haven
    {
      id: "1-1",
      restaurantId: "1",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato sauce, mozzarella, and basil",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=320&auto=format&fit=crop",
      category: "Pizza",
      isPopular: true,
      isVegetarian: true
    },
    {
      id: "1-2",
      restaurantId: "1",
      name: "Pepperoni Pizza",
      description: "Pizza topped with tomato sauce, mozzarella, and pepperoni",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=320&auto=format&fit=crop",
      category: "Pizza",
      isPopular: true
    },
    {
      id: "1-3",
      restaurantId: "1",
      name: "Hawaiian Pizza",
      description: "Pizza with ham, pineapple, and cheese on a tomato base",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=320&auto=format&fit=crop",
      category: "Pizza"
    },
    {
      id: "1-4",
      restaurantId: "1",
      name: "Garlic Breadsticks",
      description: "Freshly baked breadsticks with garlic butter and herbs",
      price: 5.99,
      image: "https://images.unsplash.com/photo-1619531038896-deaff53d151a?q=80&w=320&auto=format&fit=crop",
      category: "Sides",
      isVegetarian: true
    }
  ],
  "2": [ // Burger Palace
    {
      id: "2-1",
      restaurantId: "2",
      name: "Classic Cheeseburger",
      description: "Beef patty with cheese, lettuce, tomato, and special sauce",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=320&auto=format&fit=crop",
      category: "Burgers",
      isPopular: true
    },
    {
      id: "2-2",
      restaurantId: "2",
      name: "Bacon Burger",
      description: "Beef patty with bacon, cheese, lettuce, and BBQ sauce",
      price: 11.99,
      image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=320&auto=format&fit=crop",
      category: "Burgers",
      isPopular: true
    },
    {
      id: "2-3",
      restaurantId: "2",
      name: "Veggie Burger",
      description: "Plant-based patty with lettuce, tomato, and vegan mayo",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=320&auto=format&fit=crop",
      category: "Burgers",
      isVegetarian: true
    },
    {
      id: "2-4",
      restaurantId: "2",
      name: "French Fries",
      description: "Crispy golden french fries with sea salt",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=320&auto=format&fit=crop",
      category: "Sides",
      isVegetarian: true
    }
  ],
  "3": [ // Sushi Master
    {
      id: "3-1",
      restaurantId: "3",
      name: "California Roll",
      description: "Crab, avocado, cucumber wrapped in seaweed and rice",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=320&auto=format&fit=crop",
      category: "Rolls",
      isPopular: true
    },
    {
      id: "3-2",
      restaurantId: "3",
      name: "Salmon Nigiri",
      description: "Fresh salmon slice over pressed rice",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1617196034183-421b4f3e7c62?q=80&w=320&auto=format&fit=crop",
      category: "Nigiri",
      isPopular: true
    },
    {
      id: "3-3",
      restaurantId: "3",
      name: "Spicy Tuna Roll",
      description: "Spicy tuna and cucumber wrapped in seaweed and rice",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1615361200141-f45040f367be?q=80&w=320&auto=format&fit=crop",
      category: "Rolls"
    },
    {
      id: "3-4",
      restaurantId: "3",
      name: "Miso Soup",
      description: "Traditional Japanese soup with tofu, seaweed, and green onions",
      price: 3.99,
      image: "https://images.unsplash.com/photo-1607301406259-dfb186e15de8?q=80&w=320&auto=format&fit=crop",
      category: "Sides",
      isVegetarian: true
    }
  ]
};

export const savedAddresses: Address[] = [
  {
    id: "1",
    name: "Home",
    line1: "123 Main St",
    city: "San Francisco",
    state: "CA",
    postalCode: "94105",
    isDefault: true
  },
  {
    id: "2",
    name: "Work",
    line1: "456 Market St",
    line2: "Suite 500",
    city: "San Francisco",
    state: "CA",
    postalCode: "94103"
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "card",
    name: "Visa ending in 4242",
    lastFour: "4242",
    isDefault: true
  },
  {
    id: "2",
    type: "card",
    name: "Mastercard ending in 5555",
    lastFour: "5555"
  },
  {
    id: "3",
    type: "upi",
    name: "Google Pay"
  },
  {
    id: "4",
    type: "cash",
    name: "Cash on Delivery"
  }
];
