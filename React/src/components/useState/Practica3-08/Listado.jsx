import { useState } from "react";
import "./listado.css";

const Listado = () => {
  const [numeros, setNumeros] = useState([]);

  const generarNumero = () => {
    if (numeros.length >= 100) { // Condición antes del do-while
        console.log("Listado completado");
        return "Listado completado";
    };


    let n;
    do {
      n = Math.floor(Math.random() * 100) + 1; // Número random del 1 al 100.
    } while (numeros.includes(n));  
    // Condición que obliga a repetir el do hasta que la condición sea false.


    // Se crea nuevo array para no mofificar el original. 
    // Se introduce el número n al array.
    const resultado = [...numeros, n]; 

    setNumeros(resultado);  // Redibuja el componente con el nuevo resultado.
    return resultado;                
  };


  const eliminarTodos = () => {
    setNumeros([]); //  Vacía el array.
    return [];  
  };

  return (
    <section className="listado-card">
        <h2>Listado de números</h2>

        {/*Se crea el parrafo que solicita el ejercicio.*/}
        <p className="descripcion">   
            Pulsa <strong>Generar</strong> para añadir un número aleatorio del 1 al 100, sin repetir.
            Pulsa <strong>Eliminar</strong> para vaciar la lista.
        </p>

        {/*Se crean los botones que solicita el ejercicio.*/}
        <div className="acciones">
            <button className="generar" onClick={generarNumero}>Generar</button>
            <button className="eliminar" onClick={eliminarTodos}>Eliminar</button>
        </div>

        {/* IMPORTANTE: La prop key={n} permite a React identificar de forma única cada <li>. Así, cuando cambia el estado con setNumeros, React solo actualiza los elementos que cambian, en lugar de volver a renderizar toda la lista. */}
        <ul className="lista">
            {numeros.map((n) => (
                <li key = {n}> {n} </li>
            ))}
        </ul>

    </section>
  );
};

export default Listado;
