import { useNavigate } from "react-router-dom";
import "./inicio.css";

const Inicio = () => {

  /* useNavigate devuelve una función que permite movernos entre páginas internas
  (rutas) sin recargar toda la aplicación, manteniendo el comportamiento de una SPA. */
  const navigate = useNavigate();

  return (
    <section className="page container section-viewport">
      <div className="stack">
        <div className="hero">
          <h1>Inicio</h1>
          <p>Bienvenido a la aplicación de prácticas React Router.</p>
          <div className="actions">
            <button className="btn" onClick={() => navigate("/peliculas")}>Ver películas</button>
            <button className="btn" onClick={() => navigate("/")}>Volver al inicio</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Inicio;
