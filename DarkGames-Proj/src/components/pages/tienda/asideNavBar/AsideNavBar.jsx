import React from "react";
import { asideNavBar } from "./asideNavBar.module.css";

export default function AsideNavBar() {
  return (
    <aside className={asideNavBar}>
      <nav>
        <ul>
          <li>
            <button type="button">
              <img
                src="/img/pages/tienda/hamburger-menu-ico.svg"
                alt="hamburger_ico"
              />
            </button>
          </li>
          <li>
            <button type="button">PS4</button>
          </li>
          <li>
            <button type="button">PS3</button>
          </li>
          <li>
            <button type="button">XBOX ONE</button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
