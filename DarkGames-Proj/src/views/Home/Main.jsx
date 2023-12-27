import { useEffect } from "react";
import { main } from "./main.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/category/ps4");
  }, []);
  return (
    <main className={main}>
      <div data-id="divTitle">
        <h1>DARK GAMES</h1>
      </div>
      <section>
        <div data-id="div_index_linkA">
          <NavLink to="/category/ps4">
            <img src="/img/pages/main/ps-logo-ico.svg" alt="icono de tienda" />
          </NavLink>
        </div>
        <div data-id="div_index_linkB">
          <NavLink to="/category/xone">
            <img
              src="/img/pages/main/xbox-logo-ico.svg"
              alt="icono de tienda"
            />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
