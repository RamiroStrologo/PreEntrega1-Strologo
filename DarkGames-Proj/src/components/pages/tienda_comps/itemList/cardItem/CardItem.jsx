import React from "react";
import { cardItem } from "./cardItem.module.css";
import { useNavigate } from "react-router-dom";

export default function CardItem({ id, imagenSrc, titulo, genero, precio }) {
  const navigate = useNavigate();
  const handleImgClick = () => {
    navigate(`/tienda/detalles/${id}`);
  };
  return (
    <div className={cardItem} onClick={handleImgClick}>
      <img src={imagenSrc} alt={titulo} />
      <p>
        {`Género: ${genero}`} <br /> <br /> {`Precio: ${precio}`} <br />
      </p>
    </div>
  );
}
