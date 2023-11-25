import React, { useEffect, useState } from "react";
import Summary from "../../components/pages/detalles_comps/summary/Summary";
import CardItem from "../../components/pages/tienda_comps/itemList/cardItem/CardItem";
import { useParams } from "react-router-dom";
import getGameById from "./detallesJs.js";
import { detallesCont } from "./detalles.module.css";
import Iframe from "../../components/pages/detalles_comps/iframe/Iframe.jsx";

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
    <div className={detallesCont}>
      <div>
        <img src="/img/pages/detalles/back_ico.svg" alt="Icono de volver" />
      </div>
      <aside>
        <CardItem
          imagenSrc={detalles.imagenSrc}
          titulo={detalles.titulo}
          genero={detalles.genero}
          precio={detalles.precio}
          vistaDetalles={true}
          className="detailsView"
        />
      </aside>
      <section>
        <Summary titulo={detalles.titulo} descripcion={detalles.descripcion} />
        <Iframe id={gameId} />
      </section>
    </div>
  );
}
