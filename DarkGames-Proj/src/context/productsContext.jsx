import { createContext, useEffect, useState } from "react";
import productsJs from "./productsJs";
import { useNavigate, useParams } from "react-router-dom";

export const ProductsContext = createContext();

export const ProductsComponentContext = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [consolaInfo, setConsolaInfo] = useState({});
  const [product, setProduct] = useState({});
  const { consolaId, gameId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (consolaId) {
      productsJs.getConsolaInfo(consolaId).then((response) => {
        setConsolaInfo(response);
        if (response == null) navigate("/");
      });
      productsJs.getProducts(consolaId).then((response) => {
        setProducts(response);
      });
    }
  }, [consolaId]);

  useEffect(() => {
    if (gameId) {
      productsJs.getGameById(gameId).then((response) => {
        setProduct(response);
      });
    }
  }, [gameId]);
  return (
    <ProductsContext.Provider value={{ products, consolaInfo, product }}>
      {children}
    </ProductsContext.Provider>
  );
};
