import { createContext, useState } from "react";
import productsJs from "./js/productsJs";
import cartJs from "./js/cartJs";

export const ProductsContext = createContext();

export const ProductsComponentContext = ({ children }) => {
  const [updateCart, setUpdateCart] = useState(false);
  //Devuelve todos los juegos de una consola
  const getGames = (consolaId) => productsJs.getProductsByConsole(consolaId);

  //Devuelve la info de una consola
  const getConsole = (consolaId) => productsJs.getConsolaInfo(consolaId);

  //Devuelve un juego por su ID
  const getGame = (gameId) => productsJs.getProductById(gameId);

  //Helpers relativos al carrito
  //Obtiene la coleccion de Firebase
  const getCart = () => cartJs.getCart();

  //Agrega un juego al carrito de Firebase
  const addGame = ({ imgSrc, title, price }, cant) => {
    const productToAdd = { imgSrc, title, price, cant };
    cartJs.addProduct(productToAdd);
  };
  //Borra un item del carrito de Firebase
  const deleteProductCart = (cartItemId) => {
    cartJs.deleteProductCartById(cartItemId);
    setUpdateCart(true);
  };
  //Borra todos los items del carrito de Firebase
  const deleteAll = () => {
    cartJs.deleteCart();
    setUpdateCart(true);
  };
  //Modifica la cantidad de un item del carrito de Firebase
  const modifyProductCant = (cartItemId, newCant) => {
    cartJs.modifyProductCart(cartItemId, newCant);
    setUpdateCart(true);
  };

  const helpers = {
    getGame,
    getGames,
    getConsole,

    getCart,
    addGame,
    deleteProductCart,
    deleteAll,
    modifyProductCant,
  };
  return (
    <ProductsContext.Provider value={{ helpers, updateCart, setUpdateCart }}>
      {children}
    </ProductsContext.Provider>
  );
};
