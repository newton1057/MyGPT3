import React from "react";
import '../css/ChatBoot.css';
import Texto from "../components/Texto";
import NavBar from "../components/NavBar";

function ChatBoot(){
    return(
        <div>
        <NavBar/>
        <div className='Contenedor-Principal'>
            <h1>ChatBot</h1>
  
              <Texto
                Titulo='Introduce un texto:'/>
   
              
        </div>
        </div>
        
    );
  }
  
  export default ChatBoot;