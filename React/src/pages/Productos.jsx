import { useNavigate } from "react-router-dom";
import "./productos.css";

import imgTeclado from "../assets/img/teclado.webp";
import imgRaton from "../assets/img/raton.webp";
import imgMonitor from "../assets/img/monitor.webp";
import imgAuriculares from "../assets/img/auriculares.webp";
import imgTorre from "../assets/img/torre.webp";
import imgImpresora from "../assets/img/impresora.webp";

const productos = [
  { id: 1, nombre: "Teclado mecánico", img: imgTeclado },
  { id: 2, nombre: "Ratón inalámbrico", img: imgRaton },
  { id: 3, nombre: "Monitor 24\"", img: imgMonitor },
  { id: 4, nombre: "Auriculares", img: imgAuriculares },
  { id: 5, nombre: "Torre PC", img: imgTorre },
  { id: 6, nombre: "Impresora XL", img: imgImpresora },
];

const Productos = () => {
  const navigate = useNavigate();

  return (

    /* He colocado contenido de relleno para que no fuese un simple listado. 
    En un futuro si el ejercicio lo requiere se usarán más componentes reutilizables. */
    /* CSS con IA. */
    <section className="page container section-viewport">
      <div className="products-shell">
        <h1 className="h1">Productos</h1>

        {/* Listado de Productos. Mostramos todos por ".map". */}
        <ul className="products-grid">
          {productos.map( (producto) => (
            
            <li key = {producto.id} className="product-card">

              <figure className="product-media">
                <img
                  className="product-img"
                  src={producto.img}
                  alt={producto.nombre}
                />
              </figure>

              <div className="product-body">
                <h3 className="product-title">{producto.nombre}</h3>
              </div>

              <div className="product-actions">
                {/* De momento este botón no es funcional. */}
                <button className="btn btn-ghost">
                  Comprar
                </button>
              </div>
            </li>
          ))}
        </ul>
        
        {/* Sistema SPA: Single Page Application: React Router cambia la vista actual por el componente que corresponde a la ruta, en este caso ("/"), sin recargar la página. */}
        <div className="products-nav">
          <button className="btn" onClick={() => navigate("/")}>
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Productos;
