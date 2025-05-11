import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@entities/product/types/Product";
import { RootState } from "@app/store";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.product.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          product: action.payload,
          quantity: 1,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.product.id !== action.payload,
      );
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find(
        (item) => item.product.id === action.payload,
      );
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload,
          );
        } else {
          item.quantity -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// Export selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) =>
      total +
      (item.product.price.main + item.product.price.fractional / 100) *
        item.quantity,
    0,
  );

export default cartSlice.reducer;
