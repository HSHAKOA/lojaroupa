export type Category = "Camisas" | "Jaquetas" | "Calcas" | "Acessorios";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  summary: string;
  description: string;
  specs: string[];
  sizes: string[];
  colors: string[];
  images: string[];
};

export type CartItem = {
  productId: string;
  quantity: number;
  size: string;
  color: string;
};
