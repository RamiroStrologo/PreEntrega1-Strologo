import { buttonDelete } from "./buttonDelete.module.css";

export default function ButtonDelete({ onClick }) {
  return (
    <button onClick={onClick} className={buttonDelete}>
      <img src="/img/pages/cart/delete-ico.svg" alt="DELETE" />
    </button>
  );
}
