import { useNavigate, useParams } from "react-router-dom";
import { detallesCont } from "./itemDetailContainer.module.css";
import { CartContext } from "../../context/cartContext.jsx";
import { useContext, useEffect, useState } from "react";
import Loader from "../loader/Loader.jsx";
import CardItem from "../cardItem/CardItem.jsx";
import Summary from "../summary/Summary.jsx";
import Iframe from "../iframe/Iframe.jsx";
import ItemCount from "../itemCount/ItemCount.jsx";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const { helpers, consola } = useContext(CartContext);
  const { gameId } = useParams();
  const navigate = useNavigate();

  const handleImgClick = () => {
    consola ? navigate(`/category/${consola.name}`) : navigate("/");
  };

  const addToCart = () => {
    if (count > 0) {
      helpers.addGame(product, count);
      navigate("/cart");
    }
  };
  const upCont = () => {
    setCount(count + 1);
  };
  const downCont = () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    const setGameDetail = async () => {
      setLoading(true);
      try {
        const game = await helpers.getGame(gameId);
        setProduct(game);
      } finally {
        setLoading(false);
      }
    };
    setGameDetail();
  }, [gameId]);

  useEffect(() => {
    const setGameCount = async () => {
      const cart = await helpers.getCart();
      const foundProduct = cart.cart.find((prod) => {
        return prod.title === product?.title;
      });
      if (foundProduct) {
        const prodCant = foundProduct.cant;
        setCount(prodCant);
      }
    };
    setGameCount();
  }, [gameId, product]);

  return (
    <div className={detallesCont}>
      {loading && <Loader />}
      {!loading && (
        <>
          {" "}
          <div data-id="buttonsDetail">
            <div data-id="backButton" onClick={handleImgClick}>
              <img
                src="/img/pages/detalles/back_ico.svg"
                alt="Icono de volver"
              />
            </div>
            <div onClick={addToCart}>
              <img
                src="/img/pages/detalles/cart-add-ico.svg"
                alt="Icono de agregar"
              />
            </div>
          </div>
          <aside>
            <CardItem
              id={product.id}
              imgSrc={product.imgSrc}
              title={product?.title}
              genre={product?.genre}
              price={product?.price}
              consola={consola}
              vista={"details"}
            />
          </aside>
          <section>
            <Summary
              titulo={product?.title}
              descripcion={product?.description}
            />
            <Iframe id={product?.ytId} />
            <div data-id="divButtonCant">
              <button onClick={downCont}>-</button>
              <ItemCount count={count} />
              <button onClick={upCont}>+</button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
