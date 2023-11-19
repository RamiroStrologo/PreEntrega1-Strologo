import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tienda from "../views/Tienda/Tienda";
import Main from "../views/Home/Main";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Detalles from "../views/Detalles/Detalles";
export default function RouterPrincipal() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tienda/:consolaId" element={<Tienda />} />
        <Route path="/tienda/detalles/:gameId" element={<Detalles />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
