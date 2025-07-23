import { RestaurantData } from '@/types/restaurant';

export const restaurantData: RestaurantData = {
  info: {
    name: "Al Salam Mediterranean",
    description: "Experience authentic Arabic cuisine in a warm, welcoming atmosphere. Our skilled chefs prepare traditional recipes passed down through generations, using the finest spices and fresh ingredients to create an unforgettable Middle Eastern dining experience.",
    phone: "(555) 789-4321",
    address: "456 Cedar Lane, Midtown, NY 10017",
    email: "info@alsalammediterranean.com",
    website: "www.alsalammediterranean.com",
    heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=60",
    aboutImage: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60",
    hours: {
      "Monday": "11:00 AM - 10:00 PM",
      "Tuesday": "11:00 AM - 10:00 PM", 
      "Wednesday": "11:00 AM - 10:00 PM",
      "Thursday": "11:00 AM - 10:00 PM",
      "Friday": "11:00 AM - 11:00 PM",
      "Saturday": "11:00 AM - 11:00 PM",
      "Sunday": "12:00 PM - 9:00 PM"
    },
    socialMedia: {
      facebook: "https://facebook.com/alsalammediterranean",
      instagram: "https://instagram.com/alsalammediterranean",
      twitter: "https://twitter.com/alsalammed"
    }
  },
  menu: [
    {
      id: "1",
      name: "Hummus with Pita",
      description: "Creamy chickpea dip served with warm pita bread, tahini, and olive oil drizzle",
      price: 12,
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "2",
      name: "Baba Ganoush",
      description: "Smoky roasted eggplant dip with tahini, garlic, and pomegranate seeds",
      price: 10,
      category: "Appetizer",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d874?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "3",
      name: "Fattoush Salad",
      description: "Fresh mixed greens with tomatoes, cucumbers, radishes, and crispy pita chips",
      price: 14,
      category: "Salad",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "4",
      name: "Tabbouleh Salad",
      description: "Fresh parsley salad with tomatoes, onions, bulgur, lemon juice, and olive oil",
      price: 16,
      category: "Salad",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "5",
      name: "Shawarma Platter",
      description: "Tender marinated lamb and chicken served with rice, vegetables, and garlic sauce",
      price: 24,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "6",
      name: "Mansaf",
      description: "Traditional Jordanian dish with lamb cooked in fermented dried yogurt sauce over rice",
      price: 28,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "7",
      name: "Kabsa",
      description: "Aromatic rice dish with spiced chicken, almonds, and raisins",
      price: 22,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "8",
      name: "Lamb Kofta",
      description: "Grilled seasoned ground lamb served with tahini sauce and grilled vegetables",
      price: 26,
      category: "Main Course",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "9",
      name: "Falafel Wrap",
      description: "Crispy chickpea fritters with tahini sauce, vegetables, and pickles in fresh pita",
      price: 14,
      category: "Wraps",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d874?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "10",
      name: "Chicken Shawarma Wrap",
      description: "Marinated grilled chicken with garlic sauce, pickles, and fresh vegetables",
      price: 16,
      category: "Wraps",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "11",
      name: "Baklava",
      description: "Layers of flaky phyllo pastry filled with nuts and sweetened with honey syrup",
      price: 8,
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&auto=format&fit=crop&q=60",
      featured: true
    },
    {
      id: "12",
      name: "Knafeh",
      description: "Sweet cheese pastry soaked in sugar syrup and topped with crushed pistachios",
      price: 10,
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "13",
      name: "Ma'amoul",
      description: "Traditional filled cookies with dates, nuts, and aromatic spices",
      price: 6,
      category: "Dessert",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&auto=format&fit=crop&q=60"
    },
    {
      id: "14",
      name: "Arabic Coffee",
      description: "Traditional cardamom-spiced coffee served with dates",
      price: 5,
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "15",
      name: "Fresh Mint Tea",
      description: "Refreshing green tea with fresh mint leaves and honey",
      price: 4,
      category: "Beverages",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
    }
  ],
  gallery: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&auto=format&fit=crop&q=60",
      alt: "Fresh hummus with pita bread and olive oil",
      category: "food"
    },
    {
      id: "2", 
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d874?w=800&auto=format&fit=crop&q=60",
      alt: "Traditional falafel balls with tahini sauce",
      category: "food"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60",
      alt: "Middle Eastern mezze platter with various dips",
      category: "food"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=60",
      alt: "Delicious chicken shawarma wrap",
      category: "food"
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop&q=60",
      alt: "Traditional baklava pastry with honey",
      category: "food"
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&auto=format&fit=crop&q=60",
      alt: "Fresh tabbouleh salad with parsley and tomatoes",
      category: "food"
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
      alt: "Traditional Arabic coffee in ornate cups",
      category: "beverages"
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60",
      alt: "Arabic spices and seasonings display",
      category: "ingredients"
    },
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1545247181-516773cae754?w=800&auto=format&fit=crop&q=60",
      alt: "Traditional flatbread and pita",
      category: "food"
    },
    {
      id: "10",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=60",
      alt: "Grilled meat kebabs on skewers",
      category: "food"
    },
    {
      id: "11",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&auto=format&fit=crop&q=60",
      alt: "Traditional Arabic desserts and sweets",
      category: "food"
    },
    {
      id: "12",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=60",
      alt: "Middle Eastern rice pilaf with nuts",
      category: "food"
    }
  ]
};