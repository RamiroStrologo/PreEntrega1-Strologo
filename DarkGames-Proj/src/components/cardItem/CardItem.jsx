import {
  cardItem,
  detailsView,
  storeView,
  cartView,
} from "./cardItem.module.css";
import { useNavigate } from "react-router-dom";

export default function CardItem({
  id,
  imgSrc,
  title,
  genre,
  price,
  consola,
  vista,
}) {
  const navigate = useNavigate();

  const handleImgClick = () => {
    if (vista == "store") navigate(`/item/${id}`);
  };
  return (
    <div
      className={`${cardItem} ${
        vista == "details"
          ? detailsView
          : vista == "cart"
          ? cartView
          : storeView
      } `}
      onClick={handleImgClick}
    >
      <img src={imgSrc} alt={title} />
      <p>
        {`Género: ${genre}`} <br /> <br /> {`Precio: $${price}`} <br />
      </p>
    </div>
  );
}
