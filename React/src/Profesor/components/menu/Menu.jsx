import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  return (
    // ¿Añadimos <Login />?
    <>
      <nav>
        <Link className='menu-elemento' to='/'>
          Inicio
        </Link>
        <Link className='menu-elemento' to='/formularios'>
          Formularios
        </Link>
        <Link className='menu-elemento' to='/ciclovida'>
          useEffect
        </Link>
        <Link className='menu-elemento' to='/login'>
          Inicia sesión
        </Link>
        <Link className='menu-elemento' to='/discentes'>
          Discentes
        </Link>
        <Link className='menu-elemento' to='/contacto'>
          Contacto
        </Link>
        <Link className='menu-elemento' to='/administracion'>
          Administración
        </Link>
        <Link className='menu-elemento' to='/acerca-de'>
          Acerca de
        </Link>
      </nav>
    </>
  );
};

export default Menu;
