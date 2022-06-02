import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/navegacion/Navbar.jsx';
import Inicio from './components/pag/Inicio.jsx';
import Productos from './components/pag/Productos.jsx';
import Usuario from './components/pag/Usuario.jsx';



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
