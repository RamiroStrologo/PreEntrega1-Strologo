import React from "react";
import AsideNavBar from "./asideNavBar/AsideNavBar";
import ItemList from "./itemList/ItemList";
import getProducts from "./tiendaJs";
import { useState, useEffect } from "react";

export default function Tienda() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);
  return (
    <>
      {/* <AsideNavBar /> */}
      <ItemList products={products} />
    </>
  );
}
