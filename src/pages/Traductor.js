import React from "react";
import '../css/Traductor.css';
import Texto from "../components/Texto";
import NavBar from "../components/NavBar";

function Traductor(){
    return(
        <div>
        <NavBar/>
        <div className='Contenedor-Principal'>
            <h1>Traductor</h1>
  
              <Texto
                Titulo='Introduce un texto:'
                TituloBoton='Play'/>
     
        </div>
        </div>
        
    );
  }
  
  export default Traductor;