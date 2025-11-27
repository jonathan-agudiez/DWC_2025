import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "./../pages/Inicio.jsx";
import Contacto from "./../pages/Contacto.jsx";
import AcercaDe from "./../pages/AcercaDe.jsx";
import Discentes from "../pages/Discentes.jsx";
import Error from "./../pages/Error.jsx";
import Login from "./../pages/Login.jsx";
import Administracion from "../pages/Administracion.jsx";
import AdminDiscentes from "../pages/submenu/AdminDiscentes.jsx";
import AdminNotas from "../pages/submenu/AdminNotas.jsx";
import AdminUsuarios from "../pages/submenu/AdminUsuarios.jsx";
import DiscenteDetalle from "../pages/DiscenteDetalle.jsx";
import Formularios from "../pages/Formularios.jsx";
import CicloVida from "../pages/CicloVida.jsx";

/** Componenentes para crear rutas:
 *
 * -> instalar los paquetes necesarios : npm install react-router-dom,
 * -> <BrowserRoute> que conecta la aplicación a la URL del navegador,
 * -> <Routes> que genera un árbol de rutas y actúa como contenedor de ellas,
 * -> <Route> que representa una ruta en el árbol y necesita:
 *    -> path que es valor de la URL esperado (si coincide se activa),
 *    -> element que es el componente que se carga en <Routes> cuando coincida.
 * -> <Link> que sustituye a la etiqueta <a> de HTML para prevenir el funcionamiento por defecto y evitar que se recargue la página,
 *    -> to representa el valor de la URL que activará la ruta,
 * -> useNavigate es hook que permitirá controlar la navegación programaticamente,
 * -> submenús con <Router> anidados y uso de <Outlet>,
 * -> useParams para gestionar rutas dinámicas.
 * */

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acerca-de' element={<AcercaDe />} />
        <Route path='/discentes' element={<Discentes />} />
        <Route path='/administracion' element={<Administracion />}>
          <Route
            path='/administracion/discentes'
            element={<AdminDiscentes />}
          />
          {/* Ruta relativa. Propensa a despistes, mejor ejitar. */}
          <Route path='notas' element={<AdminNotas />}>
            <Route path='/administracion/notas/DWC' element={<Inicio />} />
            <Route path='DWS' element={<Contacto />} />
            <Route path='/administracion/notas/DIW' element={<AcercaDe />} />
          </Route>
          {/* Ruta obsoluta. Mejor opción. */}
          <Route path='/administracion/usuarios' element={<AdminUsuarios />} />
          <Route
            path='/administracion/discentedetalle/:id'
            element={<DiscenteDetalle />}
          />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/formularios' element={<Formularios />} />
        <Route path='/ciclovida' element={<CicloVida />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default Rutas;




 /*   */