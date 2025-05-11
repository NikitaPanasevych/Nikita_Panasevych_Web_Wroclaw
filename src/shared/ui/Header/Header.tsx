import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "@entities/cart/ui/CartWidget";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>Shop</h1>
          </Link>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <CartWidget />
        </div>
      </div>
    </header>
  );
};
