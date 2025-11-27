import React from "react";
import "./Administracion.css";
import MenuAdmin from "../components/menu/submenu/MenuAdmin.jsx";
import { Link, useNavigate, Outlet } from "react-router-dom";
import Contenedor from "../components/Contenedor.jsx";

const Administracion = () => {
  const navegar = useNavigate();
  return (
    <>
      <h2>Panel de administración.</h2>
      <nav className='administracion-navegacion'>
        <Link
          className='administracion-elementomenu'
          to='/administracion/discentes'
        >
          Discentes
        </Link>
        <Link
          className='administracion-elementomenu'
          to='/administracion/notas'
        >
          Notas
        </Link>
        {/* Las rutas relativas también funcionan en <Link>. */}
        <Link className='administracion-elementomenu' to='usuarios'>
          Usuarios/as
        </Link>
      </nav>
      <Contenedor>
        <Outlet />
      </Contenedor>
    </>
  );
};

export default Administracion;
