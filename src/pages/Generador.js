import React from "react";
import '../css/Generador.css';
import Texto from "../components/Texto";
import NavBar from "../components/NavBar";



//Requerimientos de OPENAI





function Generador(){
    
    

    
    return(
        <div>
        <NavBar/>
        <div className='Contenedor-Principal'>
            <h1>Generador de Texto</h1>
  
              <Texto
                Titulo='Introduce un texto:'
                />
   
              <Texto
                Titulo='Respuesta obtenida:'
                TituloBoton='Play'/>      
        </div>
        </div>
        
    );
}
  

  
  export default Generador;



