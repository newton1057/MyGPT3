import './App.css';
import Ejemplo from "./components/Ejemplo"
import Texto from "./components/Texto"

function App() {
  return (
    <div className="App">
      <div className='Contenedor-Principal'>
        <h1>MyGPT-3</h1>

        <Texto
         Titulo='Introduce un texto'
         TituloBoton='Play'/>
         
         <Texto
         Titulo='Respuesta obtenida'
         TituloBoton='Play'/>

         
        <Ejemplo 
          nombre='Eduardo Isaac Davila Bernal'
          ocupacion='Estudiante de UAM'
          texto='Mi nombre es Eduardo Isaac Davila Bernal'/>

        <Ejemplo 
          nombre='Jonathan Alexis'
          ocupacion='Estudiante de Apple'
          texto='Mi nombre es Jonathan Alexis'/>

        <Ejemplo 
          nombre='Angeles Hernandez'
          ocupacion='Calidad en Apple'
          texto='Mi nombre es Angeles Hernandez'/>
         
         
         
      </div>
    </div>
  );
}

export default App;
