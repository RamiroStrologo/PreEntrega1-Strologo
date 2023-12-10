import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";

export default function CartWidget() {
  const { helpers } = useContext(ProductsContext);

  return (
    <>
      <NavLink to={"/tienda/cart"}>
        <img src="/img/cartWidget/cart-ico.svg" alt="CARRO" />
      </NavLink>
      <span>{`cantidad: ${1}`}</span>
    </>
  );
}
