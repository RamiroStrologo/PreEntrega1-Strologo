import React from "react";
import { footerGrl } from "./footer.module.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={footerGrl}>
      <nav>
        <div data-id="divL">
          <ul>
            <li>Redes y contacto:</li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=1123629147"
                target="_blank"
              >
                <img
                  src="/img/footer/whatsapp-ico.svg"
                  alt=" Icono de Whatsapp"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dark_games.mg/"
                target="_blank"
              >
                <img
                  src="/img/footer/instagram-ico.svg"
                  alt="Icono de Instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        <NavLink to={"/aboutUs"}>Sobre nosotros</NavLink>
        <span>Copyright™ 2023</span>
      </nav>
    </footer>
  );
}
