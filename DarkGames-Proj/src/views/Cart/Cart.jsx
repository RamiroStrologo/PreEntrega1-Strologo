import { useContext, useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import Loader from "../../components/loader/Loader";
import { CartContext } from "../../context/cartContext";
import ButtonSave from "../../components/buttonSave/ButtonSave";
import ButtonDelete from "../../components/buttonDelete/ButtonDelete";
import { useNavigate } from "react-router-dom";
import { cartSummary } from "./cart.module.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [delet, setDelet] = useState(false);

  const navigate = useNavigate();
  const { helpers, updateCart, setUpdateCart } = useContext(CartContext);

  const handleCheckClick = () => {
    cart.totalItems > 0 && navigate("/tienda/cart/checkout");
  };
  const handleDeleteClick = () => {
    cart.totalItems > 0 && setDelet(true);
  };

  useEffect(() => {
    setLoading(true);
    helpers
      .getCart()
      .then((response) => {
        setCart(response);
      })
      .finally(() => {
        setLoading(false);
        setUpdateCart(false);
      });
  }, [updateCart]);

  useEffect(() => {
    if (delet) helpers.deleteAll();
    setDelet(false);
  }, [delet]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          {cart.cart.map((cartItem) => (
            <CartItem key={cartItem.id} cart={cartItem} />
          ))}
          <div className={cartSummary}>
            <span> {`Total: $${cart.totalCost}`}</span>
            <div>
              <ButtonSave onClick={handleCheckClick} />
              <ButtonDelete onClick={handleDeleteClick} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
