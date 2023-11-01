import React from "react";
import { cart } from "./cart.module.css";

export default function CartWidget() {
  return (
    <div className={cart}>
      <img src="/img/cartWidget/cart-ico.svg" alt="Cart" />
      <span>1</span>
    </div>
  );
}
