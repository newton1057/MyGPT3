import React from "react";
import '../css/Texto.css';
import axios from "axios";
import { useState } from "react";

function TextoChat(props){

  function EnviarVoz(res_voz) {
    const texto = res_voz;
    console.log(texto)
    var msg = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(msg);
  };

  function EnviarVoz_manual(e) {
    var texto_m = document.getElementById("respuesta_obtenida").value;
    console.log(texto_m)
    var msg_m = new SpeechSynthesisUtterance(texto_m);
    e.preventDefault();
    window.speechSynthesis.speak(msg_m);
    
    return false;
  };


  const [loading, setLoading] = useState(false);
  
  var payload = {
    prompt: ".",
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    temperature: 0.9,
    n: 1,
    model: "text-davinci-001"
  };

  

  
  const getRes = () => {
    setLoading(true)
    var text = document.getElementById("exampleFormControlTextarea1").value;
    payload.prompt=text;
    console.log(process.env.REACT_APP_API_KEY)
    
    axios({
      method: "POST",
      url: "https://api.openai.com/v1/completions",
      data: payload,
      headers: {
        "Content-Type": "application/json",
        Authorization:
        "Bearer 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"
      }
    })
      .then((res) => {
        console.log("Envia respuesta");
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
      });
      
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      var text_res = res.data.choices[0].text;
      
      document.getElementById("respuesta_obtenida").innerHTML = text_res;
      EnviarVoz(text_res);
      
      setLoading(false);
      console.log("Exito")
    }
  };

  

  return(
    <div className="contenedor-Texto">
      
      <div className="texto-contenedor-Ejemplo">
        
      </div>

        <form className="Formulario">
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">{props.Titulo}</label>
                <textarea 
                  class="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3" 
                  placeholder="Escribir aqui..." 
                  readOnly={loading} 
                  >  
                </textarea>
            </div>
            <button class="btn btn-lg btn-secondary fw-bold border-white bg-dark" type="submit" disabled={loading} onClick={getRes}>{loading ? "Espere.. " : "Enviar"}</button>

            <div class="mb-3" id="Respuesta">
                <label for="exampleFormControlTextarea1" class="form-label">Respuesta Obtenida</label>
                <textarea disabled class="form-control" id="respuesta_obtenida">  
                </textarea>
                <button class="btn btn-lg btn-secondary fw-bold border-white bg-dark"  onClick={ EnviarVoz_manual}>Reproducir</button>
            </div>
        </form>

        
    </div>
    
    
  );
}

export default TextoChat;