import React from "react";
import { headerGrl } from "./header.module.css";
import Cart from "../cartWidget/CartWidget";
export default function Header() {
  return (
    <>
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
              <a>
                <img src="/img/header/home-ico.svg" alt="HOME" />
              </a>
            </li>
            <li>
              <a>
                <img src="/img/header/store-ico.svg" alt="STORE" />
              </a>
            </li>
            <li>
              <a>
                <img src="/img/header/about-ico.svg" alt="ABOUTUS" />
              </a>
            </li>
            <Cart />
          </ul>
        </nav>
      </header>
    </>
  );
}
