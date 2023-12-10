import { loaderCont, loader } from "./loader.module.css";

export default function Loader() {
  return (
    <div className={loaderCont}>
      <div className={loader}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
