import { useNavigate } from "react-router-dom";
import "./acercaDe.css";

function AcercaDe() {
  const navigate = useNavigate();
  return (
    <section className="page container section-viewport">
      <div className="stack">
        <div className="about">
          <h1 className="h1">Acerca de</h1>
          <p>Esta es la versión 1.0 de mi práctica.</p>

          {/* Sistema SPA: Single Page Application: React Router cambia la vista actual por el componente que corresponde a la ruta, en este caso ("/"), sin recargar la página. */}
          <button className="btn" onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      </div>
    </section>
  );
}
export default AcercaDe;
