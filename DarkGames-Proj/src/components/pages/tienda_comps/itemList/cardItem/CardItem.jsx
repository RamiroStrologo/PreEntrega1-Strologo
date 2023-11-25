import React from "react";
import { cardItem, detailsView, storeView } from "./cardItem.module.css";
import { useNavigate } from "react-router-dom";

export default function CardItem({
  id,
  imagenSrc,
  titulo,
  genero,
  precio,
  vistaDetalles,
}) {
  const navigate = useNavigate();
  const handleImgClick = () => {
    navigate(`/tienda/detalles/${id}`);
  };
  return (
    <div
      className={`${cardItem} ${!vistaDetalles ? storeView : detailsView}`}
      onClick={handleImgClick}
    >
      <img src={imagenSrc} alt={titulo} />
      <p>
        {`Género: ${genero}`} <br /> <br /> {`Precio: ${precio}`} <br />
      </p>
    </div>
  );
}
