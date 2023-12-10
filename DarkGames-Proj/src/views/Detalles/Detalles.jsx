import Summary from "../../components/summary/Summary";
import CardItem from "../../components/cardItem/CardItem";
import Iframe from "../../components/iframe/Iframe.jsx";
import Loader from "../../components/loader/Loader.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { detallesCont } from "./detalles.module.css";
import { ProductsContext } from "../../context/productsContext.jsx";
import { useContext, useEffect, useState } from "react";

export default function Detalles() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { helpers } = useContext(ProductsContext);

  const { gameId, consolaId } = useParams();
  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(`/tienda/${consolaId}`);
  };

  const addToCart = () => {
    helpers.addGame(product, 1);
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
          </section>
        </>
      )}
    </div>
  );
}
