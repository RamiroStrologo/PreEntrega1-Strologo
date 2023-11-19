import CardItem from "./cardItem/CardItem";
import { itemList } from "./itemList.module.css";
import Separador from "./separador/Separador";

export default function ItemList({ products, consolaInfo }) {
  return (
    <section className={itemList}>
      <Separador
        sepSrc={consolaInfo.imgSepSrc}
        sepTxt={consolaInfo.txtSep}
        sepAlt={consolaInfo.altImgSep}
      />
      <div data-id="contCards">
        {products.map((prod) => (
          <CardItem key={prod.id} {...prod} />
        ))}
      </div>
    </section>
  );
}
