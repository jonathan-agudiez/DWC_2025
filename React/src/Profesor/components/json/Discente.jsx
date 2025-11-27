const Discente = (props) => {
  // Desestructuración de parámetros.
  const { modulos, nombre, apellidos, curso, aficiones, comida } = props.datos;

  console.log(props);

  return (
    <>
      <div>
        <p>
          {apellidos}, {nombre}
        </p>
        <p>{curso}</p>
        <p>{modulos}</p>
        <p>{aficiones}</p>
        <p>{comida}</p>
      </div>
    </>
  );
};

export default Discente;
