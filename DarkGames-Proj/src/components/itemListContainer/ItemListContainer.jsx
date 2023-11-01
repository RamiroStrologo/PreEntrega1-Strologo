import React from "react";
import { iListCont } from "./itemListContainer.module.css";

export default function ItemListContainer({ greeting }) {
  return (
    <div className={iListCont}>
      <h1>{greeting}</h1>
    </div>
  );
}
