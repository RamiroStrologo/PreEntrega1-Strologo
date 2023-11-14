import React from "react";
import CardItem from "./cardItem/CardItem";
import { itemList } from "./itemList.module.css";

export default function ItemList({ products }) {
  return (
    <section className={itemList}>
      <div>
        {products.map((prod) => (
          <CardItem key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
}
