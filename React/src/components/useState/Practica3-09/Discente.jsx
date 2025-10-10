// src/componentes/matricula/Discente.jsx
import React from "react";
import './matricula.css';

function Discente({ alumno, desmatricular }) {
  return (
    <article className="discente-card">
    <h3>{alumno.nombre} {alumno.apellidos}</h3>

    <div className="discente-meta">
        <div><strong>Curso:</strong> {alumno.curso}</div>
        <div><strong>Comida:</strong> {alumno.comida}</div>
    </div>

    <ul className="aficiones">
        {alumno.aficiones.map( (a) => 
            <li key={a}>{a}</li> )
        }
    </ul>

    <button className="btn-desmatricular" onClick={() => desmatricular(alumno.id)}>
        DESMATRICULAR
    </button>
    </article>
  );
}

export default Discente;
