import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductId } from "types/general";
import { CartItem } from "types/models";

// Define a type for the slice state
interface CartState {
  items: CartItem[];
  cartTotal: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  cartTotal: 0,
};

const getCartTotal = (items: CartItem[]) => {
  return items.reduce((accum, curr) => accum + curr.price * curr.quantity, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.cartTotal = getCartTotal(state.items);
    },
    removeItemById: (state, action: PayloadAction<ProductId>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.cartTotal = getCartTotal(state.items);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: ProductId; newQuantity: number }>,
    ) => {
      const item = state.items.find(
        (item) => item.id === action.payload.productId,
      );
      if (item) {
        item.quantity = action.payload.newQuantity;
        state.cartTotal = getCartTotal(state.items);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItemById, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
