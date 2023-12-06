import React, { useEffect, useState } from "react";
import CardItem from "../../components/cardItem/CardItem";
import cartJs from "./cartJs";
import { cartCont } from "./cart.module.css";

export default function Cart({ toCart }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    cartJs.getCart().then((response) => {
      setCart(response);
    });
  }, [cart]);
  return (
    <div>
      {cart.map((cart) => (
        <div className={cartCont}>
          <CardItem key={cart.id} imgSrc={cart.imgSrc} vista={"cart"} />
          <div data-id="divSpan">
            <span data-id="titleSpan"> {`Título: ${cart.title}`} </span>
            <span>{`Precio: ${cart.price}`}</span>
          </div>
          <div data-id="divButtonCant">
            <button>-</button>
            <span>{cart.cant}</span>
            <button>+</button>
          </div>
          <div data-id="divButtonDelete">
            <button>
              <img src="/img/pages/cart/check-ico.svg" alt="SAVE" />
            </button>
            <button>
              <img src="/img/pages/cart/delete-ico.svg" alt="DELETE" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
