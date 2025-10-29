import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio.jsx";
import Contacto from "../pages/Contacto.jsx";
import AcercaDe from "../pages/AcercaDe.jsx";
import Peliculas from "../pages/Peliculas.jsx";
import PeliculaDetalle from "../pages/PeliculaDetalle.jsx";
import Interpretes from "../pages/Interpretes.jsx";
import Galeria from "../pages/Galeria.jsx";
import GaleriaTitulo from "../pages/GaleriaTitulo.jsx";
import GaleriaInterprete from "../pages/GaleriaInterprete.jsx";
import GaleriaDirector from "../pages/GaleriaDirector.jsx";
import Error from "../pages/Error.jsx";


const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/peliculas" element={<Peliculas />} />
      <Route path="/peliculas/:id" element={<PeliculaDetalle />} />
      
      <Route path="/interpretes" element={<Interpretes />} />

      {/* En <Galeria /> se usa <Outlet /> para mostrar aquí las subrutas */}
      <Route path="/galeria" element={<Galeria />}>
        <Route path="titulo" element={<GaleriaTitulo />}/>
        <Route path="interprete" element={<GaleriaInterprete />} />
        <Route path="director" element={<GaleriaDirector />} />
      </Route>

      <Route path="/acerca-de" element={<AcercaDe />} />

      <Route path="/contacto" element={<Contacto />} />
      
      {/* Ruta de Error 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Rutas;
