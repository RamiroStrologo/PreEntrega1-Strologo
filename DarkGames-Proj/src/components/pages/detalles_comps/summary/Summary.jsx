import React from "react";
import { summary } from "./summary.module.css";

export default function Summary({ titulo, descripcion, id }) {
  return (
    <div className={summary}>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  );
}
