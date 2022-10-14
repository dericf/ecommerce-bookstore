export interface Product {
  author: string; // should have authorId as well
  id: number;
  title: string;
  description: string;
  price: number;
  category: string; // TODO enum or similar
  imageSrc: string;
}

export type CartItem = Product & { quantity: number };
