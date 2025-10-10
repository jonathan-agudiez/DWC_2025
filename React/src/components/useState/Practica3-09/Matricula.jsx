import React, { useState } from 'react'

import datos from '../../json/matriculados.json';
import Discente from './Discente.jsx';
import './matricula.css'


const Matricula = () => {

    const valoresIniciales = datos.discentes;

    const [lista, setLista] = useState(valoresIniciales);
    const [ordenAsc, setOrdenAsc] = useState(true);

    
    const mostrar2DAW = () => {
        return setLista(valoresIniciales.filter((discente) => discente.curso === "2DAW" ));
    };

    const resetearLista = () => {
        return setLista(valoresIniciales);
    };

    const mostrarPrimerCurso = () => {return setLista(valoresIniciales.filter((discente) => discente.curso[0] === "1"));
    };

    const mostrarLectura = () => { 
        return setLista(valoresIniciales.filter((discente) => discente.aficiones.some (elemento =>  elemento === "lectura")));
    };

    const desmatricular = (id) => {
      setLista((valoresIniciales) => valoresIniciales.filter((discente) => discente.id !==id));
    };



    const ordenarListaApellidos = () => {

     // "sort()" modifica la lista original, cuidado, se crea una copia (listaOrdenada).
     // Se usa "...lista" para usar la lista que está en ese momento dibujada, no la de valoresOriginales. 
     const listaOrdenada = [...lista].sort((a, b) => {

        // Criterio para que sort() ordene: Si localeCompare devuelve negativo, ordenará ascendente.
        const comp = a.apellidos.localeCompare(b.apellidos);

        // -------------------------------------------
        // PROFESOR: Hasta aquí conseguí hacerlo yo.
        return ordenAsc ? comp : -comp;    // No se me ocurrió "ordenAsc" como estado.
     });

     setLista(listaOrdenada); // Actualiza la lista previamente ordenada por sort().
     setOrdenAsc(!ordenAsc); // Invierte a true o a false (una vez por click).
    };






  return (
    <section className="matricula">

    <h1>Discentes matriculados</h1>
    <div className='btn-wrapper'>
        <button className="btn-2daw" onClick={mostrar2DAW}>2DAW</button>
        <button className="btn-primero" onClick={mostrarPrimerCurso}>1er CURSO</button>
        <button className="btn-lectura" onClick={mostrarLectura}>LECTORES</button>
        <button className="btn-orden" onClick={ordenarListaApellidos}>ORDENAR</button>
        <button className="btn-reset" onClick={resetearLista}>RESET</button>
    </div>

    <div className="listado">
        {lista.length ? (
          lista.map((alumno) => (
            <Discente
              key={alumno.id}
              alumno={alumno}
              desmatricular={desmatricular}
            />
          ))
        ) : (
          <p>No hay discentes para mostrar.</p>
        )}
      </div>

    </section>
  )
}

export default Matricula