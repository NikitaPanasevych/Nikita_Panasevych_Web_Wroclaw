import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "@pages/ProductList";
import CartPage from "@pages/Cart";
import OrderSummaryPage from "@pages/OrderSummary";
import NotFoundPage from "@pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <OrderSummaryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
