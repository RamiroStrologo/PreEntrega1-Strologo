import { NavLink } from "react-router-dom";

export default function CartWidget({ cartCant }) {
  return (
    <>
      <NavLink to={"/cart"}>
        <img src="/img/cartWidget/cart-ico.svg" alt="CARRO" />
        <span>{cartCant}</span>
      </NavLink>
    </>
  );
}
