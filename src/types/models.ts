export interface Product {
  author: string; // should have authorId as well in real app
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  imageSrc: string;
}

export type CartItem = Product & { quantity: number };
