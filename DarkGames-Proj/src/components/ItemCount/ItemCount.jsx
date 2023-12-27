import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";

export default function ItemCount() {
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
  return <span>{totalCart}</span>;
}
