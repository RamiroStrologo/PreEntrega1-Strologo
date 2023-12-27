import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../views/itemListContainer/ItemListContainer";
import Main from "../views/Home/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ItemDetailContainer from "../views/itemDetailContainer/ItemDetailContainer";
import Cart from "../views/Cart/Cart";
import AboutUs from "../views/AboutUs/AboutUs";
import Checkout from "../views/Checkout/Checkout";
import { CartProvider } from "../context/cartContext";

export default function RouterPrincipal() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
      </CartProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/category/:consolaId"
          element={
            <CartProvider>
              <ItemListContainer />
            </CartProvider>
          }
        />
        <Route
          path="/tienda/:consolaId/item/:gameId"
          element={
            <CartProvider>
              <ItemDetailContainer />
            </CartProvider>
          }
        />
        <Route
          path="/tienda/cart"
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
