import React from "react";
import { useCart } from "@entities/cart/model/hooks";
import type { Product } from "@entities/product/types/Product";
import styles from "./AddToCartButton.module.scss";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  className = "",
}) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
  };

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};
