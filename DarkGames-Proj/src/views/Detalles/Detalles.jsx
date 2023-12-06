import Summary from "../../components/summary/Summary";
import CardItem from "../../components/cardItem/CardItem";
import Iframe from "../../components/iframe/Iframe.jsx";
import { useNavigate } from "react-router-dom";
import { detallesCont } from "./detalles.module.css";
import { ProductsContext } from "../../context/productsContext.jsx";
import { useContext } from "react";

export default function Detalles() {
  const { product, consolaInfo } = useContext(ProductsContext);
  const navigate = useNavigate();
  const handleImgClick = () => {
    navigate(`/tienda/${consolaInfo.name}`);
  };

  return (
    <div className={detallesCont}>
      <div onClick={handleImgClick}>
        <img src="/img/pages/detalles/back_ico.svg" alt="Icono de volver" />
      </div>
      <aside>
        <CardItem
          id={product.id}
          imgSrc={product.imgSrc}
          title={product?.title}
          genre={product?.genre}
          price={product?.price}
          consola={consolaInfo?.name}
          vista={"details"}
        />
      </aside>
      <section>
        <Summary titulo={product?.title} descripcion={product?.description} />
        <Iframe id={product?.ytId} />
      </section>
    </div>
  );
}
