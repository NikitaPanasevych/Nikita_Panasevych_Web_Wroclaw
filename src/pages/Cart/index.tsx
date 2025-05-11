import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@entities/cart/model/hooks";
import { MainLayout } from "@shared/layouts/MainLayout";
import { formatPrice } from "@entities/product/lib/formatPrice";
import styles from "./Cart.module.scss";

const CartPage: React.FC = () => {
  const {
    items,
    itemsCount,
    total,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className={styles.emptyCart}>
          <h1>Your Cart is Empty</h1>
          <p>Looks like you haven't added any products to your cart yet.</p>
          <Link to="/" className={styles.continueShoppingBtn}>
            Continue Shopping
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className={styles.cartPage}>
        <div className={styles.cartHeader}>
          <h1 className={styles.title}>Your Cart ({itemsCount} items)</h1>
          <Link to="/" className={styles.backToProductsBtn}>
            Back to Products
          </Link>
        </div>

        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {items.map((item) => (
              <div key={item.product.id} className={styles.cartItem}>
                <div className={styles.productImage}>
                  <div className={styles.placeholder}>
                    <span>{item.product.name.charAt(0)}</span>
                  </div>
                </div>

                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{item.product.name}</h3>
                  <p className={styles.productPrice}>
                    {formatPrice(item.product.price)}
                  </p>
                </div>

                <div className={styles.quantityControls}>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => decrementItem(item.product.id)}
                  >
                    -
                  </button>
                  <span className={styles.quantity}>{item.quantity}</span>
                  <button
                    className={styles.quantityBtn}
                    onClick={() => incrementItem(item.product.id)}
                  >
                    +
                  </button>
                </div>

                <div className={styles.itemTotal}>
                  {formatPrice({
                    main: Math.floor(
                      (item.product.price.main +
                        item.product.price.fractional / 100) *
                        item.quantity,
                    ),
                    fractional: Math.round(
                      (((item.product.price.main +
                        item.product.price.fractional / 100) *
                        item.quantity) %
                        1) *
                        100,
                    ),
                  })}
                </div>

                <button
                  className={styles.removeBtn}
                  onClick={() => removeItem(item.product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className={styles.orderSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>
            </Link>

            <button className={styles.clearCartBtn} onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
