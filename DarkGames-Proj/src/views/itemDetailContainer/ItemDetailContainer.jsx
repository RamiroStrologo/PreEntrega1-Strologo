import Summary from "../../components/summary/Summary.jsx";
import CardItem from "../../components/cardItem/CardItem.jsx";
import Iframe from "../../components/iframe/Iframe.jsx";
import Loader from "../../components/loader/Loader.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { detallesCont } from "./itemDetailContainer.module.css";
import { CartContext } from "../../context/cartContext.jsx";
import { useContext, useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount.jsx";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  const { helpers } = useContext(CartContext);

  const { gameId, consolaId } = useParams();
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(`/category/${consolaId}`);
  };

  const addToCart = () => {
    helpers.addGame(product, count);
    navigate("/tienda/cart");
  };
  const upCont = () => {
    setCount(count + 1);
  };
  const downCont = () => {
    if (count > 1) setCount(count - 1);
  };

  useEffect(() => {
    setLoading(true);
    helpers
      .getGame(gameId)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [gameId]);

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
              consola={consolaId}
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
