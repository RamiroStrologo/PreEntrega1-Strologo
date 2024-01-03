import NavBar from "../navBar/NavBar";
import ItemList from "../itemList/ItemList";
import { tienda } from "./itemListContainer.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import Loader from "../loader/Loader";

export default function ItemListContainer() {
  const [totalCart, setTotalCart] = useState(0);
  const [loading, setLoading] = useState(true);
  const { helpers, setConsola, setGamesArray } = useContext(CartContext);

  const { consolaId = "none" } = useParams();
  useEffect(() => {
    setLoading(true);
    Promise.all([
      helpers.getConsole(consolaId),
      helpers.getGames(consolaId),
      helpers.getAllGames(),
    ])
      .then(([consoleResponse, gamesResponse, allGamesResponse]) => {
        setConsola(consoleResponse);
        consolaId != "none"
          ? setGamesArray(gamesResponse)
          : setGamesArray(allGamesResponse);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [consolaId, setConsola, setGamesArray]);
  useEffect(() => {
    helpers.getCart().then((response) => {
      setTotalCart(response.totalItems);
    });
  });
  return (
    <div className={tienda}>
      {loading && <Loader />}
      {!loading && (
        <>
          <NavBar cartCant={totalCart} />
          <ItemList />
        </>
      )}
    </div>
  );
}
