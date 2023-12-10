import { localInfo, aboutText, aboutUs } from "./aboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={aboutUs}>
      <div className={localInfo}>
        <div data-id="locRef">
          <div>
            <p>
              <img src="img/pages/aboutUs/location-ico.svg" alt="ubicación" />
              Encontranos en: L. N. Alem 215, Local 16, Monte Grande, Bs. As.
            </p>
          </div>
          <div>
            <p>
              <img src="img/pages/aboutUs/clock-ico.svg" alt="ubicación" />
              Horario de atención:
            </p>
            <ul>
              <li>Lunes a Viernes de 9hs a 19hs</li>
              <li>Sabados de 9 a 13hs y de 16 a 20hs</li>
            </ul>
          </div>
        </div>
        <div data-id="locMap">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1821.751452626789!2d-58.46909557444401!3d-34.81670059168507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd161571a21f1%3A0xf0f45268ec345ac3!2sAAC%2C%20Leandro%20N.%20Alem%20215%2C%20C1003%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1690977607556!5m2!1ses!2sar"
              width="500"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div data-id="sep"></div>
      <div className={aboutText}>
        <h1>SOBRE NOSOTROS</h1>
        <p>
          Dark Games es un local atendido hace más de 10 años por Gamers como
          vos y compartimos la misma pasión que vos por los juegos! Nos
          enorgullece presentar un rincón único en el mundo de los videojuegos,
          donde la pasión y la diversión se unen. Contamos con una amplia
          selección de juegos para Play Station, XBOX y PC, así como el
          compromiso de brindar un servicio personalizado y orientación experta
          Nos dedicamos a la venta, compra y canje de videojuegos de todas las
          consolas; y reparacion de computadoras y consolas. Visitanos en
          nuestro local en Monte Grande, Alem 215 Local 16, o contactanos por{" "}
          <a
            href="https://api.whatsapp.com/send?phone=1123629147"
            target="_blank"
          >
            Whatsapp
          </a>
          . Tambien podes seguirnos en
          <a href="https://www.instagram.com/dark_games.mg/" target="_blank">
            Instagram
          </a>
          (...).
        </p>
        <div>
          <img src="img/pages/aboutUs/about_us.webp" alt="us" id="img_about" />
        </div>
      </div>
    </div>
  );
}
