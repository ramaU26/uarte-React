/*import logo from './logo.svg';*/
import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar.js';
import Inicio from './components/pag/Inicio.js';
import Productos from './components/pag/Productos.js';
import Usuario from './components/pag/Usuario.js';



function App() {
  return (
   <div className='App'>
     <Router>
       <Navbar>
         <Routes>
           <Router path='/' exact component={Inicio}/>
           <Router path='/pokemon' exact component={Usuario}/>
           <Router path='/items' exact component={Productos}/>
         </Routes>
       </Navbar>
     </Router>


     </div>
  );
}

export default App;
