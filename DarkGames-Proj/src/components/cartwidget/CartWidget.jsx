import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../context/productsContext";

export default function CartWidget() {
  const { helpers, updateCart, setUpdateCart } = useContext(ProductsContext);
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
      </NavLink>
      <span>{`cantidad: ${totalCart}`}</span>
    </>
  );
}
