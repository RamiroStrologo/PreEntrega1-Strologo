import { buttonSave } from "./buttonSave.module.css";

export default function ButtonSave({ onClick }) {
  return (
    <button onClick={onClick} className={buttonSave}>
      <img src="/img/pages/cart/check-ico.svg" alt="SAVE" />
    </button>
  );
}
