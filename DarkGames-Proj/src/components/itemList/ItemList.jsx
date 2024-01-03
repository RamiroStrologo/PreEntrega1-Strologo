import { useContext, useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem";
import Separador from "../separador/Separador";
import { itemList } from "./itemList.module.css";
import { CartContext } from "../../context/cartContext";
import { useParams } from "react-router-dom";

export default function ItemList() {
  const { gamesArray, consola } = useContext(CartContext);
  const [games, setGames] = useState([]);
  const { consolaId } = useParams();
  useEffect(() => {
    setGames(gamesArray);
  });
  return (
    <section className={itemList}>
      {consolaId && consola && (
        <Separador
          sepSrc={consola.imgSrc}
          sepTxt={consola.txtSep}
          sepAlt={consola.altImgSep}
        />
      )}

      <div data-id="contCards">
        {games.map((prod) => (
          <CardItem key={prod.id} {...prod} consola={consola} vista={"store"} />
        ))}
      </div>
    </section>
  );
}
