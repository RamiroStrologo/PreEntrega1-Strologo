import CardItem from "../cardItem/CardItem";
import { cartCont } from "./cartItem.module.css";

export default function CartItem({ cart }) {
  return (
    <div className={cartCont}>
      <CardItem imgSrc={cart?.imgSrc} vista={"cart"} />
      <div data-id="divSpan">
        <span data-id="titleSpan"> {`Título: ${cart?.title}`} </span>
        <span>Cantidad: {cart.cant}</span>
        <span>{`Precio: $${cart?.price * cart.cant}`}</span>
      </div>
    </div>
  );
}
