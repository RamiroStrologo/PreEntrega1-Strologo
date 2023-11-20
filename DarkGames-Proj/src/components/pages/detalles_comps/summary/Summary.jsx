import React from "react";
import { summary } from "./summary.module.css";

export default function Summary({ titulo, descripcion, id }) {
  return (
    <section className={summary}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </section>
  );
}
