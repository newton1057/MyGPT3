import React from "react";
import '../css/Texto.css';


function Texto(props){
    function EnviarVoz(e) {
        var texto = document.getElementById('exampleFormControlTextarea1').value;
        var msg = new SpeechSynthesisUtterance(texto);
        window.speechSynthesis.speak(msg);
        e.preventDefault();
        console.log('You clicked submit.');

        
      }

  return(
    <div className="contenedor-Texto">
      
      <div className="texto-contenedor-Ejemplo">
        
      </div>

        <form onSubmit={EnviarVoz} className="Formulario">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{props.Titulo}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button class="btn btn-lg btn-secondary fw-bold border-white bg-dark" type="submit">{props.TituloBoton}</button>
        </form>

        
    </div>
    
    
  );
}

export default Texto;