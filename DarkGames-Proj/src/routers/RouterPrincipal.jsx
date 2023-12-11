import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from "../views/Tienda/Tienda";
import Main from "../views/Home/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Detalles from "../views/Detalles/Detalles";
import Cart from "../views/Cart/Cart";
import AboutUs from "../views/AboutUs/AboutUs";
import Checkout from "../views/Checkout/Checkout";
import { ProductsComponentContext } from "../context/productsContext";

export default function RouterPrincipal() {
  return (
    <BrowserRouter>
      <ProductsComponentContext>
        <Header />
      </ProductsComponentContext>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/tienda/:consolaId"
          element={
            <ProductsComponentContext>
              <Tienda />
            </ProductsComponentContext>
          }
        />
        <Route
          path="/tienda/:consolaId/detalles/:gameId"
          element={
            <ProductsComponentContext>
              <Detalles />
            </ProductsComponentContext>
          }
        />
        <Route
          path="/tienda/cart"
          element={
            <ProductsComponentContext>
              <Cart />
            </ProductsComponentContext>
          }
        />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/tienda/cart/checkout"
          element={
            <ProductsComponentContext>
              <Checkout />
            </ProductsComponentContext>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
