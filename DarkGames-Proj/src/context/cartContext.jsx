import { createContext, useState } from "react";
import productsJs from "./js/productsJs";
import cartJs from "./js/cartJs";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [updateCart, setUpdateCart] = useState(false);

  const getGames = (consolaId) => productsJs.getProductsByConsole(consolaId);

  const getConsole = (consolaId) => productsJs.getConsolaInfo(consolaId);

  const getGame = (gameId) => productsJs.getProductById(gameId);

  const getCart = () => cartJs.getCart();

  const addGame = ({ imgSrc, title, price }, cant) => {
    const productToAdd = { imgSrc, title, price, cant };
    cartJs.addProduct(productToAdd);
  };

  const deleteProductCart = (cartItemId) => {
    cartJs.deleteProductCartById(cartItemId);
    setUpdateCart(true);
  };

  const deleteAll = () => {
    cartJs.deleteCart();
    setUpdateCart(true);
  };

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
    <CartContext.Provider value={{ helpers, updateCart, setUpdateCart }}>
      {children}
    </CartContext.Provider>
  );
};
