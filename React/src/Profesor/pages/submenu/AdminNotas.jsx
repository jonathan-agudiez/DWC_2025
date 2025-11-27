import React from "react";
import "./AdminNotas.css";
import Contenedor from "../../components/Contenedor";
import { Link, Outlet } from "react-router-dom";

const AdminNotas = () => {
  return (
    <>
      <h2>Administración de notas de los/las discentes.</h2>
      <Contenedor>
        <nav className='adminNotas-navegacion'>
          <Link
            className='adminNotas-elementomenu'
            to='/administracion/notas/DWC'
          >
            DWC
          </Link>
          <Link
            className='adminNotas-elementomenu'
            to='/administracion/notas/DWS'
          >
            DWS
          </Link>
          <Link className='adminNotas-elementomenu' to='DIW'>
            DIW
          </Link>
        </nav>
      </Contenedor>
      <Contenedor>
        <Outlet />
      </Contenedor>
    </>
  );
};

export default AdminNotas;
