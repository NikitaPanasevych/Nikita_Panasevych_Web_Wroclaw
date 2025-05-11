import { useDispatch, useSelector } from "react-redux";
import type { Product } from "@entities/product/types/Product";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "./slice";

export const useCart = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const itemsCount = useSelector(selectCartItemsCount);
  const total = useSelector(selectCartTotal);

  return {
    items,
    itemsCount,
    total,

    addItem: (product: Product) => dispatch(addToCart(product)),
    removeItem: (productId: number) => dispatch(removeFromCart(productId)),
    incrementItem: (productId: number) =>
      dispatch(incrementQuantity(productId)),
    decrementItem: (productId: number) =>
      dispatch(decrementQuantity(productId)),
    clearCart: () => dispatch(clearCart()),
  };
};
