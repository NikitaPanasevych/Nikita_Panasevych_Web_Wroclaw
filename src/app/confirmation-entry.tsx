import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import OrderConfirmationPage from "@pages/OrderConfirmation";

console.log("Hello World");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <OrderConfirmationPage />
    </Provider>
  </React.StrictMode>,
);
