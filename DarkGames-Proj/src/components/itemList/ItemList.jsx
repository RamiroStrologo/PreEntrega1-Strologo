import { useContext } from "react";
import CardItem from "../cardItem/CardItem";
import { itemList } from "./itemList.module.css";
import Separador from "../separador/Separador";
import { ProductsContext } from "../../context/productsContext";

export default function ItemList() {
  const { products, consolaInfo } = useContext(ProductsContext);
  return (
    <section className={itemList}>
      <Separador
        sepSrc={consolaInfo.imgSrc}
        sepTxt={consolaInfo.txtSep}
        sepAlt={consolaInfo.altImgSep}
      />
      <div data-id="contCards">
        {products.length > 0 &&
          products.map((prod) => (
            <CardItem
              key={prod.id}
              {...prod}
              consola={consolaInfo.name}
              vista={"store"}
            />
          ))}
      </div>
    </section>
  );
}
