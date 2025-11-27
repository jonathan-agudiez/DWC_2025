import React from "react";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
  return (
    <>
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
    </>
  );
};

export default MenuAdmin;
