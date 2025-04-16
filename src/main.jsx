import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "../src/contexts/ProductContext.jsx";
import SidebarProvider from "./contexts/SidebarContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";
import AuthProvider from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <AuthProvider>

    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
    </AuthProvider>
  </SidebarProvider>
);
