import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@entities/cart/model/hooks";
import { MainLayout } from "@shared/layouts/MainLayout";
import { formatPrice } from "@entities/product/lib/formatPrice";
import styles from "./OrderSummary.module.scss";

const OrderSummaryPage: React.FC = () => {
  const { items, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className={styles.emptyState}>
          <h1>Your Cart is Empty</h1>
          <p>You need to add items to your cart before checking out.</p>
          <Link to="/products" className={styles.shopButton}>
            Browse Products
          </Link>
        </div>
      </MainLayout>
    );
  }

  const handlePlaceOrder = () => {
    // Store order information in localStorage before clearing the cart
    const orderData = {
      items: items,
      subtotal: total,
      tax: total * 0.1,
      total: total * 1.1,
      orderId: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
    };
    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    // Clear the cart
    clearCart();

    // Use window.location.href for a full page reload to a separate HTML page
    window.location.href = `${import.meta.env.BASE_URL}confirmation.html`;
  };

  return (
    <MainLayout>
      <div className={styles.orderSummary}>
        <h1 className={styles.title}>Order Summary</h1>

        <div className={styles.content}>
          <div className={styles.itemsList}>
            <div className={styles.tableHeader}>
              <div className={styles.productCol}>Product</div>
              <div className={styles.quantityCol}>Quantity</div>
              <div className={styles.priceCol}>Price</div>
              <div className={styles.subtotalCol}>Subtotal</div>
            </div>

            {items.map((item) => {
              const itemSubtotal =
                (item.product.price.main +
                  item.product.price.fractional / 100) *
                item.quantity;

              return (
                <div key={item.product.id} className={styles.item}>
                  <div className={styles.productCol}>
                    <div className={styles.productInfo}>
                      <div className={styles.productImage}>
                        <span>{item.product.name.charAt(0)}</span>
                      </div>
                      <div className={styles.productName}>
                        {item.product.name}
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantityCol}>{item.quantity}</div>
                  <div className={styles.priceCol}>
                    {formatPrice(item.product.price)}
                  </div>
                  <div className={styles.subtotalCol}>
                    ${itemSubtotal.toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.summary}>
            <h2>Summary</h2>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className={styles.summaryRow}>
              <span>Tax</span>
              <span>${(total * 0.1).toFixed(2)}</span>
            </div>

            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>${(total * 1.1).toFixed(2)}</span>
            </div>

            <button
              className={styles.placeOrderButton}
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>

            <Link to="/cart" className={styles.backToCartLink}>
              Return to Cart
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OrderSummaryPage;
