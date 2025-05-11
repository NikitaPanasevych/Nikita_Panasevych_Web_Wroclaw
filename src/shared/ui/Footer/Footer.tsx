import React from "react";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Shop</h3>
            <p>Your one-stop shop for quality products.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact</h3>
            <p>Email: contact@shop.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
