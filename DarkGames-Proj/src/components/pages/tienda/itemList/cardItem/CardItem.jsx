import React from "react";
import { cardItem } from "./cardItem.module.css";

export default function CardItem({
  id,
  imagenSrc,
  titulo,
  genero,
  precio,
  descripcion,
}) {
  return (
    <div className={cardItem}>
      <img src={imagenSrc} alt={titulo} />
      <p>{`Género: ${genero} <br/> Precio: ${precio}`}</p>
    </div>
  );
}
