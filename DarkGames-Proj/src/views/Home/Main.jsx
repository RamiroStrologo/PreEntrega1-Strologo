import React, { useEffect } from "react";
import { main } from "./main.module.css";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <main className={main}>
      <div data-id="divTitle">
        <h1>DARK GAMES</h1>
      </div>
      <section>
        <div data-id="div_index_linkA">
          <NavLink to="/tienda/ps4">
            <img src="/img/pages/main/ps-logo-ico.svg" alt="icono de tienda" />
          </NavLink>
        </div>
        <div data-id="div_index_linkB">
          <NavLink to="/tienda/xone">
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
