
import { Restaurant, MenuItem, Category, Address, PaymentMethod } from "../types";

export const categories: Category[] = [
  {
    id: "1",
    name: "North Indian",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "South Indian",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Desserts",
    image: "https://images.unsplash.com/photo-1516747773440-e5f384a3adbc?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Chinese",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Thali",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Street Food",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=320&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Fast Food",
    image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?q=80&w=320&auto=format&fit=crop",
  }
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Taj Mahal Restaurant",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=640&auto=format&fit=crop",
    cuisine: "North Indian",
    rating: 4.7,
    deliveryFee: 49,
    deliveryTime: "25-35",
    isPopular: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Dosa Paradise",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=640&auto=format&fit=crop",
    cuisine: "South Indian",
    rating: 4.5,
    deliveryFee: 39,
    deliveryTime: "20-30",
    isPopular: true
  },
  {
    id: "3",
    name: "Biryani House",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=640&auto=format&fit=crop",
    cuisine: "Hyderabadi",
    rating: 4.8,
    deliveryFee: 59,
    deliveryTime: "25-40",
    isFeatured: true
  },
  {
    id: "4",
    name: "Mumbai Street Food",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=640&auto=format&fit=crop",
    cuisine: "Street Food",
    rating: 4.2,
    deliveryFee: 29,
    deliveryTime: "15-25"
  },
  {
    id: "5",
    name: "Punjab da Dhaba",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=640&auto=format&fit=crop",
    cuisine: "Punjabi",
    rating: 4.6,
    deliveryFee: 49,
    deliveryTime: "30-45",
    isPopular: true
  },
  {
    id: "6",
    name: "Delhi Chaat Corner",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=640&auto=format&fit=crop",
    cuisine: "Chaat & Snacks",
    rating: 4.3,
    deliveryFee: 39,
    deliveryTime: "20-35"
  }
];

export const menuItems: { [key: string]: MenuItem[] } = {
  "1": [ // Taj Mahal Restaurant
    {
      id: "1-1",
      restaurantId: "1",
      name: "Butter Chicken",
      description: "Classic North Indian dish with tender chicken in a rich tomato and butter sauce",
      price: 299,
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=320&auto=format&fit=crop",
      category: "Main Course",
      isPopular: true
    },
    {
      id: "1-2",
      restaurantId: "1",
      name: "Paneer Tikka Masala",
      description: "Grilled cottage cheese cubes in a spiced tomato gravy",
      price: 249,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=320&auto=format&fit=crop",
      category: "Main Course",
      isPopular: true,
      isVegetarian: true
    },
    {
      id: "1-3",
      restaurantId: "1",
      name: "Garlic Naan",
      description: "Flatbread with garlic and butter, cooked in a tandoor",
      price: 49,
      image: "https://images.unsplash.com/photo-1600935926387-12d9b03066f0?q=80&w=320&auto=format&fit=crop",
      category: "Breads",
      isVegetarian: true
    },
    {
      id: "1-4",
      restaurantId: "1",
      name: "Dal Makhani",
      description: "Slow-cooked black lentils with cream and butter",
      price: 199,
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&w=320&auto=format&fit=crop",
      category: "Main Course",
      isVegetarian: true
    }
  ],
  "2": [ // Dosa Paradise
    {
      id: "2-1",
      restaurantId: "2",
      name: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato filling served with sambar and chutney",
      price: 149,
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=320&auto=format&fit=crop",
      category: "Dosa",
      isPopular: true,
      isVegetarian: true
    },
    {
      id: "2-2",
      restaurantId: "2",
      name: "Idli Sambar",
      description: "Steamed rice cakes served with lentil soup and coconut chutney",
      price: 99,
      image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?q=80&w=320&auto=format&fit=crop",
      category: "Breakfast",
      isPopular: true,
      isVegetarian: true
    },
    {
      id: "2-3",
      restaurantId: "2",
      name: "Uttapam",
      description: "Thick pancake topped with onions, tomatoes and cilantro",
      price: 129,
      image: "https://images.unsplash.com/photo-1567337710282-00832b415979?q=80&w=320&auto=format&fit=crop",
      category: "Breakfast",
      isVegetarian: true
    },
    {
      id: "2-4",
      restaurantId: "2",
      name: "Filter Coffee",
      description: "Traditional South Indian coffee decoction with milk",
      price: 59,
      image: "https://images.unsplash.com/photo-1559070169-a3077159ee16?q=80&w=320&auto=format&fit=crop",
      category: "Beverages",
      isVegetarian: true
    }
  ],
  "3": [ // Biryani House
    {
      id: "3-1",
      restaurantId: "3",
      name: "Hyderabadi Chicken Biryani",
      description: "Aromatic basmati rice cooked with tender chicken and authentic spices",
      price: 269,
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=320&auto=format&fit=crop",
      category: "Biryani",
      isPopular: true
    },
    {
      id: "3-2",
      restaurantId: "3",
      name: "Veg Biryani",
      description: "Fragrant rice with mixed vegetables and spices",
      price: 199,
      image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=320&auto=format&fit=crop",
      category: "Biryani",
      isVegetarian: true
    },
    {
      id: "3-3",
      restaurantId: "3",
      name: "Mutton Biryani",
      description: "Traditional dish with tender mutton pieces and fragrant rice",
      price: 299,
      image: "https://images.unsplash.com/photo-1642821373181-696a54913da9?q=80&w=320&auto=format&fit=crop",
      category: "Biryani",
      isPopular: true
    },
    {
      id: "3-4",
      restaurantId: "3",
      name: "Raita",
      description: "Yogurt with cucumber and mild spices",
      price: 49,
      image: "https://images.unsplash.com/photo-1539252554935-80c8d6afa6ec?q=80&w=320&auto=format&fit=crop",
      category: "Sides",
      isVegetarian: true
    }
  ]
};

export const savedAddresses: Address[] = [
  {
    id: "1",
    name: "Home",
    line1: "42 Jasmine Gardens, Malviya Nagar",
    city: "New Delhi",
    state: "Delhi",
    postalCode: "110017",
    isDefault: true
  },
  {
    id: "2",
    name: "Office",
    line1: "401 Techpark Building",
    line2: "Whitefield Main Road",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560066"
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: "1",
    type: "card",
    name: "HDFC Bank Card ending in 4242",
    lastFour: "4242",
    isDefault: true
  },
  {
    id: "2",
    type: "card",
    name: "ICICI Bank Card ending in 5555",
    lastFour: "5555"
  },
  {
    id: "3",
    type: "upi",
    name: "Google Pay (user@okicici)"
  },
  {
    id: "4",
    type: "cash",
    name: "Cash on Delivery"
  }
];
