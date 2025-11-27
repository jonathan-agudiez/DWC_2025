import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const permiso = true;
  const navegar = useNavigate();
  return (
    <>
      <p>Pulse para inciar sesión.</p>
      <button
        onClick={() => {
          permiso ? navegar("/discentes") : navegar("/no-tines-permiso");
        }}
      >
        Comprobar si tiene sesión.
      </button>
    </>
  );
};

export default Login;
