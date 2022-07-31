import React from "react";
import '../css/Ejemplo.css';

function Ejemplo(props){
  return(
    <div className="contenedor-Ejemplo">
      <img className="image-Ejemplo" src="" alt="Foto"/>
      <div className="texto-contenedor-Ejemplo">
        <p className="Titulo">{props.nombre}</p>
        <p className="Subtitulo">{props.ocupacion}</p>
        <p className="General">{props.texto}</p>
      </div>
    </div>
  );
}

export default Ejemplo;