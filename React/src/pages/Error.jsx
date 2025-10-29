import { useNavigate } from "react-router-dom";
import "./error.css";

const Error = () => {
  const navigate = useNavigate();
  return (
    <section className="page container section-viewport">
      <div className="stack">
        <div className="errorCard">
          <div className="code">404</div>
          <h1 className="h1">Página no encontrada</h1>
          <p>La ruta que has intentado abrir no existe.</p>

          {/* Sistema SPA: Single Page Application: React Router cambia la vista actual por el componente que corresponde a la ruta, en este caso ("/"), sin recargar la página. */}
          <button className="btn" onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      </div>
    </section>
  );
};
export default Error;
