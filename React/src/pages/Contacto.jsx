import { useNavigate } from "react-router-dom";
import "./contacto.css";

const Contacto = () => {
  const navigate = useNavigate();
  
  return (
    <section className="page container section-viewport">
      <div className="stack">
        <div className="sectionCard">
          <h1 className="h1">Contacto</h1>
          <div className="infoRow">
            <span className="label">Email</span>
            <span className="value">jonagualf@alu.edu.gva.es</span>
          </div>
          <div className="infoRow">
            <span className="label">Teléfono</span>
            <span className="value">+34 655 129 813</span>
          </div>
          
          {/* Sistema SPA: Single Page Application: React Router cambia la vista actual por el componente que corresponde a la ruta, en este caso ("/"), sin recargar la página. */}
          <button className="btn" onClick={() => navigate("/")}>Volver al inicio</button>
        </div>
      </div>
    </section>
  );
};
export default Contacto;
