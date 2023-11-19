import React from "react";
import { headerGrl } from "./header.module.css";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className={headerGrl}>
      <div data-id="banner">
        <div>
          <img src="/img/header/logo_dg.webp" alt="LOGO" />
        </div>
        <div>
          <img src="/img/header/BANNER_DG.webp" alt="BANNER" />
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <img src="/img/header/home-ico.svg" alt="HOME" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/tienda/ps4">
              <img src="/img/header/store-ico.svg" alt="STORE" />
            </NavLink>
          </li>
          <li>
            <a>
              <img src="/img/header/about-ico.svg" alt="ABOUTUS" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
