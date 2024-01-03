import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { CartProvider } from "../context/cartContext";
import Cart from "../components/Cart/Cart";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import Checkout from "../components/Checkout/Checkout";
import AboutUs from "../components/AboutUs/AboutUs";

export default function RouterPrincipal() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
      </CartProvider>
      <Routes>
        <Route
          path="/"
          element={
            <CartProvider>
              <ItemListContainer />
            </CartProvider>
          }
        />
        <Route
          path="/category/:consolaId"
          element={
            <CartProvider>
              <ItemListContainer />
            </CartProvider>
          }
        />
        <Route
          path="/item/:gameId"
          element={
            <CartProvider>
              <ItemDetailContainer />
            </CartProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartProvider>
              <Cart />
            </CartProvider>
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/tienda/cart/checkout"
          element={
            <CartProvider>
              <Checkout />
            </CartProvider>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
