import { Link, useLocation } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  const location = useLocation(); // Hook que nos dice en qué ruta estamos, esto es importante para determinar un estilo css diferente a active y al que no es active. 

  return (
    
    <header className="navbar">
      <div className="navbar-container">
        {/* Marca o nombre del sitio */}
        <div className="navbar-titulo">Mi Práctica 4-07</div>

        {/* Menú Nav centrado con grid */}
        <nav className="navbar-links">
          <Link to="/" className={location.pathname === "/" ? "navlink active" : "navlink"}> Inicio </Link>

          <Link to="/peliculas" className={ location.pathname === "/peliculas" ? "navlink active" : "navlink"}> Peliculas </Link>

          <Link to="/interpretes" className={ location.pathname === "/interpretes" ? "navlink active" : "navlink"}> Intérpretes </Link>

          <Link to="/galeria" className={ location.pathname === "/galeria" ? "navlink active" : "navlink"}> Galería </Link>

          <Link to="/acerca-de" className={location.pathname === "/acerca-de" ? "navlink active" : "navlink"}> Acerca de </Link>

          <Link to="/contacto" className={location.pathname === "/contacto" ? "navlink active" : "navlink"}> Contacto </Link>

        </nav>

        {/* Div derecho vacío se usa para centrar el grid */}
        {/* El grid tiene tres columnas: título, menú y este espacio a la derecha.
        Gracias a margin: 0 auto, el menú queda centrado horizontalmente. */}
        <div className="navbar-derecho"></div>
      </div>
    </header>
  );
};

export default Menu;
