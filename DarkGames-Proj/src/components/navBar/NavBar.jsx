import React from "react";
import { asideNavBar } from "./navBar.module.css";
import { NavLink } from "react-router-dom";

export default function AsideNavBar() {
  return (
    <aside className={asideNavBar}>
      <nav>
        <ul>
          <li>
            <NavLink>
              <img
                src="/img/pages/tienda/hamburger-menu-ico.svg"
                alt="hamburger_ico"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/ps4">PS4</NavLink>
          </li>
          <li>
            <NavLink to="/category/ps3">PS3</NavLink>
          </li>
          <li>
            <NavLink to="/category/xone">XBOX ONE</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
