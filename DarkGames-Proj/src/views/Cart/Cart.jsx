import { useCallback, useContext, useEffect, useState } from "react";
import CartItem from "../../components/cartItem/CartItem";
import Loader from "../../components/loader/Loader";
import { ProductsContext } from "../../context/productsContext";
import cartJs from "../../context/js/cartJs";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const { helpers } = useContext(ProductsContext);

  useEffect(() => {
    setLoading(true);
    helpers
      .getCart()
      .then((response) => {
        setCart(response);
        console.log(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading &&
        cart.map((cartItem) => <CartItem key={cartItem.id} cart={cartItem} />)}
    </div>
  );
}
