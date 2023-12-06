import React from "react";
import { separador } from "./separador.module.css";

export default function Separador({ sepSrc, sepTxt, sepAlt }) {
  return (
    <span className={separador}>
      <img src={sepSrc} alt={sepAlt} />
      <h2>{sepTxt}</h2>
      <img src={sepSrc} alt={sepAlt} />
    </span>
  );
}
