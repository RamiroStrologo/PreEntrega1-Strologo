import CardItem from "../cardItem/CardItem";
import { cartCont } from "./cartItem.module.css";
import { ProductsContext } from "../../context/productsContext";
import { useContext, useEffect, useState } from "react";
import ButtonDelete from "../buttonDelete/ButtonDelete";
import ButtonSave from "../buttonSave/ButtonSave";

export default function CartItem({ cart }) {
  const [cont, setCont] = useState(cart.cant);
  const [save, setSave] = useState(false);
  const [delet, setDelet] = useState(false);

  const { helpers } = useContext(ProductsContext);

  const upCont = () => {
    setCont(cont + 1);
  };
  const downCont = () => {
    if (cont > 1) setCont(cont - 1);
  };

  useEffect(() => {
    if (save) helpers.modifyProductCant(cart.id, cont);
    setSave(false);
  }, [save]);

  useEffect(() => {
    if (delet) helpers.deleteProductCart(cart.id);
    setDelet(false);
  }, [delet]);

  return (
    <div className={cartCont}>
      <CardItem imgSrc={cart?.imgSrc} vista={"cart"} />
      <div data-id="divSpan">
        <span data-id="titleSpan"> {`Título: ${cart?.title}`} </span>
        <span>{`Precio: $${cart?.price}`}</span>
      </div>
      <div data-id="divButtonCant">
        <button onClick={downCont}>-</button>
        <span>{cont}</span>
        <button onClick={upCont}>+</button>
        <span>{`Total: $${cart.price * cont}`}</span>
      </div>
      <div data-id="divButtonDelete">
        <ButtonSave onClick={() => setSave(true)} />
        <ButtonDelete onClick={() => setDelet(true)} />
      </div>
    </div>
  );
}
