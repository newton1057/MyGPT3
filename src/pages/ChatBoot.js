import React from "react";
import '../css/ChatBoot.css';
import NavBar from "../components/NavBar";
import TextoChat from "../components/TextoChat";

function ChatBoot(){
    return(
        <div>
        <NavBar/>
        <div className='Contenedor-Principal'>
            <h1>ChatBot</h1>
  
              <TextoChat
                Titulo='Introduce un texto:'/>
   
              
        </div>
        </div>
        
    );
  }
  
  export default ChatBoot;