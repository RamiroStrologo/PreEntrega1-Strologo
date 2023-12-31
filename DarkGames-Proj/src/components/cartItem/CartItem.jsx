import { useContext, useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem";
import { cartCont } from "./cartItem.module.css";
import ButtonDelete from "../buttonDelete/ButtonDelete";
import { CartContext } from "../../context/cartContext";

export default function CartItem({ cart }) {
  const { helpers } = useContext(CartContext);
  const [delet, setDelet] = useState(false);
  useEffect(() => {
    if (delet) helpers.deleteProductCart(cart.id);
    setDelet(false);
  }, [delet]);
  return (
    <div className={cartCont}>
      <CardItem imgSrc={cart?.imgSrc} vista={"cart"} />
      <div data-id="divSpan">
        <span data-id="titleSpan"> {`Título: ${cart?.title}`} </span>
        <span>Cantidad: {cart.cant}</span>
        <span>{`Precio: $${cart?.price * cart.cant}`}</span>
      </div>
      <ButtonDelete onClick={() => setDelet(true)} />
    </div>
  );
}
