import AsideNavBar from "../../components/asideNavBar/AsideNavBar";
import ItemList from "../../components/itemList/ItemList";
import { tienda } from "./tienda.module.css";

export default function Tienda() {
  return (
    <div className={tienda}>
      <AsideNavBar />
      <ItemList />
    </div>
  );
}
