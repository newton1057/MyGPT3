import React from "react";
import '../css/Texto.css';
import axios from "axios";
import { useState } from "react";


function Texto(props){
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  var cond = 1;
  var payload = {
    prompt: ".",
    max_tokens: 128,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    temperature: 0.4,
    n: 1,
    model: "text-davinci-001"
  };

  
  const getRes = () => {
    setLoading(true)
    var text = document.getElementById("exampleFormControlTextarea1").value;
    payload.prompt=text;
    
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
      setObj(res.data);
      
      console.log(obj)
            
      document.getElementById("respuesta_obtenida").innerHTML = text_res;
      EnviarVoz(text_res)
      setLoading(false);
      console.log("Exito")

    }
  };

  function ejecutar(){
    alert("Entra")
    if(cond%2==0){
      console("2da vez")
      getRes();
    }
    else{
      console("1ra vez")
      getRes();
    }
  }

  function EnviarVoz(respuesta_ai) {

        var texto = respuesta_ai;
        console.log(texto)
        var msg = new SpeechSynthesisUtterance(texto);
        window.speechSynthesis.speak(msg);
        console.log('You clicked submit.');
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

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Respuesta Obtenida</label>
                <textarea disabled class="form-control" id="respuesta_obtenida">  
                </textarea>
            </div>
        </form>

        
    </div>
    
    
  );
}

export default Texto;