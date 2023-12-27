import { useContext, useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem";
import Loader from "../loader/Loader";
import Separador from "../separador/Separador";
import { itemList } from "./itemList.module.css";
import { CartContext } from "../../context/cartContext";
import { useParams } from "react-router-dom";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [consolaInfo, setConsolaInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const { helpers } = useContext(CartContext);

  const { consolaId } = useParams();

  useEffect(() => {
    setLoading(true);
    Promise.all([helpers.getConsole(consolaId), helpers.getGames(consolaId)])
      .then(([consoleResponse, GameResponse]) => {
        setConsolaInfo(consoleResponse);
        setProducts(GameResponse);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [consolaId]);
  return (
    <section className={itemList}>
      {loading && <Loader />}
      {!loading && (
        <>
          <Separador
            sepSrc={consolaInfo.imgSrc}
            sepTxt={consolaInfo.txtSep}
            sepAlt={consolaInfo.altImgSep}
          />
          <div data-id="contCards">
            {products.map((prod) => (
              <CardItem
                key={prod.id}
                {...prod}
                consola={consolaInfo.name}
                vista={"store"}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
