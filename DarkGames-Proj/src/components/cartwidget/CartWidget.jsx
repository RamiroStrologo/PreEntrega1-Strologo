import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

export default function CartWidget() {
  const { helpers, updateCart, setUpdateCart } = useContext(CartContext);
  const [totalCart, setTotalCart] = useState(0);
  useEffect(() => {
    helpers
      .getCart()
      .then((response) => {
        setTotalCart(response.totalItems);
      })
      .finally(() => {
        setUpdateCart(false);
      });
  }, [updateCart]);
  return (
    <>
      <NavLink to={"/tienda/cart"}>
        <img src="/img/cartWidget/cart-ico.svg" alt="CARRO" />
        <span>{totalCart}</span>
      </NavLink>
    </>
  );
}
