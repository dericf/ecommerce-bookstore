import { Page } from "types/general";

export const ROUTES: Record<Page, string> = {
  HOME: "/",
  PRODUCTS: "/products",
  PRODUCT_ITEM: "/products/:productId",
  CART: "/cart",
};
