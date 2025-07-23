export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  category?: string;
}

export interface RestaurantInfo {
  name: string;
  description: string;
  phone: string;
  address: string;
  email: string;
  website: string;
  heroImage: string;
  aboutImage: string;
  hours?: {
    [key: string]: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface RestaurantData {
  info: RestaurantInfo;
  menu: MenuItem[];
  gallery: GalleryItem[];
}

export type MenuCategory = 'all' | string;