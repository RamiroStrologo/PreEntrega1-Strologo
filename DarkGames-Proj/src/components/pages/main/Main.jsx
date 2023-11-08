import React from "react";
import { main } from "./main.module.css";
export default function Index() {
  return (
    <main className={main}>
      <div data-id="divTitle">
        <h1>DARK GAMES</h1>
      </div>
      <section>
        <div data-id="div_index_linkA">
          <a>
            <img src="/img/pages/main/ps-logo-ico.svg" alt="icono de tienda" />
          </a>
        </div>
        <div data-id="div_index_linkB">
          <a>
            <img
              src="/img/pages/main/xbox-logo-ico.svg"
              alt="icono de tienda"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
