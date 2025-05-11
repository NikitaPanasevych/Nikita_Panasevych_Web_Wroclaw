import type { Product } from "../types/Product";
import { formatPrice } from "../lib/formatPrice";
import { AddToCartButton } from "@features/add-to-cart/ui/AddToCartButton";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, price } = product;
  const formattedPrice = formatPrice(price);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholder}>
          <span>{name.charAt(0)}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
      <AddToCartButton product={product} className={styles.button} />
    </div>
  );
};
