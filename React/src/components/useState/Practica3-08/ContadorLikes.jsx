import React, { useState } from "react";
import "./contadorLikes.css";

const ContadorLikes = () => {
  // Los dos estados para Like y Dislike.
  const [contadorLike, setContadorLike] = useState(0);
  const [contadorDislike, setContadorDislike] = useState(0);

  // Función funcional para Like.
  const like = () => {
    setContadorLike((contadorLike) => contadorLike + 1);
  };

  // Función funcional para Dislike.
  const dislike = () => {
    setContadorDislike((contadorDislike) => contadorDislike + 1);
  };

    return (
            
    <section className="contador-card">

        {/* Estilo CSS hecho con IA, JSX propio. */}
        <h2>Contadores Likes & Dislikes</h2>

        <div className="grid">
            <div className="col like-col">
                <p className="valor">{contadorLike}</p>
                {/* Botón incrementar. */}
                <button className="like" onClick={like}></button>   
            </div>

            <div className="col dislike-col">
                <p className="valor">{contadorDislike}</p>
                {/* Botón incrementar. */}
                <button className="dislike" onClick={dislike}></button>
            </div>
        </div>

    </section>
    
    );
};

export default ContadorLikes;
