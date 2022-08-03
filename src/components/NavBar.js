import React from "react";
import '../css/NavBar.css';

function NavBar(props){
  return(
    <div id="NavBar">
        <nav class="navbar navbar-expand-lg bg-light fixed-top" >
  <div class="container-fluid">
    <a class="navbar-brand" href="/#">MyGPT3</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#">ChatBot</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Traductor">Traductor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/Generador">Generador de Texto</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
    
  );
}

export default NavBar;