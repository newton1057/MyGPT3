import './App.css';
import Texto from "./components/Texto";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';

import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    
    
    <BrowserRouter>
      <Routes>

      <Route path='/' element={
        <div className="App">
        <NavBar/>
        <div className='Contenedor-Principal'>
            <h1>ChatBot</h1>
  
              <Texto
                Titulo='Introduce un texto:'
                TituloBoton='Play'/>
   
              <Texto
                Titulo='Respuesta obtenida:'
                TituloBoton='Play'/>      
        </div>
        
      </div>
        
      }/>

<Route path='/Traductor' element={
        <div className="App">
        <NavBar/>
        <div className='Contenedor-Principal'>
            
            <h1>Traductor</h1>
  
              <Texto
                Titulo='Introduce un texto:'
                TituloBoton='Play'/>
  
              <Texto
                Titulo='Respuesta obtenida:'
                TituloBoton='Play'/>
  
            
            
            
          
          
          
      
        </div>
      </div>
        
      }/>

<Route path='/Generador' element={
        <div className="App">
        <NavBar/>
        <div className='Contenedor-Principal'>
            <h1>Generador de Textos</h1>
              <Texto
                Titulo='Introduce un texto:'
                TituloBoton='Play'/>
   
              <Texto
                Titulo='Respuesta obtenida:'
                TituloBoton='Play'/>
        </div>
      </div>        
      }/>
      <Route path='/Acercade' element={
        <div className="App">
        <NavBar/>
        <div className='TA'>
            <h1>Acerca de</h1>
            <Footer/>
        </div>
      </div>        
      }/>
      </Routes>
      
    
    
    </BrowserRouter>
  );
}

export default App;
