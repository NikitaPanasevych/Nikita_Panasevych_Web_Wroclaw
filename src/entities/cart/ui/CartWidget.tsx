import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../model/hooks";
import styles from "./CartWidget.module.scss";

export const CartWidget: React.FC = () => {
  const { itemsCount } = useCart();

  return (
    <div className={styles.cartWidget}>
      <Link to="/cart" className={styles.cartButton}>
        Cart ({itemsCount})
      </Link>
    </div>
  );
};
