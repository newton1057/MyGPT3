import './App.css';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import ChatBoot from './pages/ChatBoot';
import Traductor from './pages/Traductor';
import Generador from './pages/Generador';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/' element={
        <div id='Marco'>
          <ChatBoot/>
        </div>
      }/>

<Route path='/Traductor' element={
        <div id='Marco'>
          <Traductor/>
        </div>
        
      }/>

<Route path='/Generador' element={
        <div id='Marco'>
          <Generador/>
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
    </div>
    
  );
}

export default App;
