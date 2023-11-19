import React, { useEffect, useState } from "react";
import Summary from "../../components/pages/detalles_comps/summary/Summary";
import CardItem from "../../components/pages/tienda_comps/itemList/cardItem/CardItem";
import { useParams } from "react-router-dom";
import getGameById from "./detallesJs.js";

export default function Detalles({
  id,
  imagenSrc,
  titulo,
  genero,
  precio,
  descripcion,
}) {
  const gameId = useParams();
  const [detalles, setDetalles] = useState([]);
  useEffect(() => {
    getGameById(gameId).then((response) => {
      setDetalles(response);
    });
  }, [gameId]);

  return (
    <div>
      <CardItem
        imagenSrc={detalles.imagenSrc}
        titulo={detalles.titulo}
        genero={detalles.genero}
        precio={detalles.precio}
      />
      <Summary titulo={detalles.titulo} descripcion={detalles.descripcion} />
    </div>
  );
}
