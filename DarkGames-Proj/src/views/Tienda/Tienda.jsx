import React from "react";
import AsideNavBar from "../../components/pages/tienda_comps/asideNavBar/AsideNavBar";
import ItemList from "../../components/pages/tienda_comps/itemList/ItemList";
import tiendaJs from "./tiendaJs";
import { useState, useEffect } from "react";
import { tienda } from "./tienda.module.css";
import { useParams } from "react-router-dom";

export default function Tienda() {
  const [products, setProducts] = useState([]);
  const [consolaInfo, setConsolaInfo] = useState([]);
  const { consolaId } = useParams();
  useEffect(() => {
    tiendaJs.getProducts(consolaId).then((response) => {
      setProducts(response);
    });
    tiendaJs.getConsolaInfo(consolaId).then((response) => {
      setConsolaInfo(response);
    });
  }, [consolaId]);
  return (
    <div className={tienda}>
      <AsideNavBar />
      <ItemList products={products} consolaInfo={consolaInfo} />
    </div>
  );
}
