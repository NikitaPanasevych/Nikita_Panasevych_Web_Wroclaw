import React, { useEffect, useState } from "react";
import { formatPrice } from "@entities/product/lib/formatPrice";
import styles from "./OrderConfirmation.module.scss";
import type { CartItem } from "@entities/cart/model/slice";

interface OrderData {
  items: CartItem[];
  subtotal: number;
  total: number;
  orderId: string;
  date: string;
}

const OrderConfirmationPage: React.FC = () => {
  console.log("OrderConfirmationPage rendered");
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("lastOrder");
    if (storedOrder) {
      try {
        setOrderData(JSON.parse(storedOrder));
        console.log("Order data loaded:", JSON.parse(storedOrder));
      } catch (error) {
        console.error("Error parsing order data:", error);
      }
    } else {
      console.log("No order data found in localStorage");
    }
  }, []);

  if (!orderData) {
    return (
      <>
        <div className={styles.noOrder}>
          <h1>No Order Found</h1>
          <p>We couldn't find any recent order information.</p>
          <a
            href={`${import.meta.env.BASE_URL}/`}
            className={styles.shopButton}
          >
            Go to Products
          </a>
        </div>
      </>
    );
  }

  const formattedDate = new Date(orderData.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className={styles.confirmationPage}>
        <div className={styles.successBanner}>
          <div className={styles.checkmark}>✓</div>
          <h1>Order Placed Successfully!</h1>
          <p>Thank you for your purchase. Your order has been received.</p>
        </div>

        <div className={styles.orderDetails}>
          <div className={styles.orderInfo}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Order ID:</span>
              <span className={styles.value}>{orderData.orderId}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Date:</span>
              <span className={styles.value}>{formattedDate}</span>
            </div>
          </div>

          <h2>Order Summary</h2>

          <div className={styles.itemsList}>
            <div className={styles.tableHeader}>
              <div className={styles.productCol}>Product</div>
              <div className={styles.quantityCol}>Quantity</div>
              <div className={styles.priceCol}>Price</div>
              <div className={styles.subtotalCol}>Subtotal</div>
            </div>

            {orderData.items.map((item) => {
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

          <div className={styles.totals}>
            <div className={styles.totalRow}>
              <span>Subtotal:</span>
              <span>${orderData.subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.totalRow}>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className={`${styles.totalRow} ${styles.finalTotal}`}>
              <span>Total:</span>
              <span>${orderData.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href={`${import.meta.env.BASE_URL}/`}
            className={styles.continueShoppingButton}
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationPage;
