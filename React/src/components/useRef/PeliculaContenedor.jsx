import React from "react";

import "./peliculaContenedor.css"; 

function PeliculaContenedor({ children }) {
  return <section className="peliculaContenedor">{children}</section>;
}

export default PeliculaContenedor;

