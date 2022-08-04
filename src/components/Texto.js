import React from "react";
import '../css/Texto.css';
import axios from "axios";
import { useState } from "react";


function Texto(props){
  const [loading, setLoading] = useState(false);
  let [obj, setObj] = useState({ choices: [] });
  const payload = {
    prompt: "Hola",
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    temperature: 0.4,
    n: 1,
    model: "text-davinci-001"
  };

  const getRes = () => {
    var text = document.getElementById("exampleFormControlTextarea1").value;
    alert(text)
    payload.prompt=text;
    alert (payload.prompt)

    console.log(payload.prompt)
    console.log(payload.model)
    setLoading(true)
    
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
        console.log(res);
        responseHandler(res);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.message, e);
      });
      console.log("Exito")
      alert(obj.choices[1])
  };

  const responseHandler = (res) => {
    if (res.status === 200) {
      setObj(res.data);
      setLoading(false);
    }
  };

  function EnviarVoz(e) {
        var texto = document.getElementById('exampleFormControlTextarea1').value;
        var msg = new SpeechSynthesisUtterance(texto);
        window.speechSynthesis.speak(msg);
        e.preventDefault();
        console.log('You clicked submit.');
  };

  return(
    <div className="contenedor-Texto">
      
      <div className="texto-contenedor-Ejemplo">
        
      </div>

        <form onSubmit={EnviarVoz} className="Formulario">
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
        </form>

        
    </div>
    
    
  );
}

export default Texto;