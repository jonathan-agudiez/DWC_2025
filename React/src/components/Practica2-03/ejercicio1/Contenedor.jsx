import React from "react";

import "./contenedor.css"; 

function Contenedor({ children }) {
  return <section className="contenedor">{children}</section>;
}

export default Contenedor;

