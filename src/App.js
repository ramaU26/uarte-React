import './App.css';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar.jsx';
import Inicio from './components/navegacion/pag/Inicio.jsx';
import Productos from './components/navegacion/pag/Productos.jsx';
import Usuario from './components/navegacion/pag/Usuario';
import {useState} from 'react';
import ItemCounter from './components/itemcount/ItemCount';
import ItemListContainer from './components/itemlistconteiner/itemListContainer';



function App() {


  /*SUMAR Y RESTAR */
  
    const [count, setCount] = useState(0);
    const limit = 10;

    const onAdd = () => {
      if (count === limit) {
        alert("Alcanzaste el maximo de stock");
        return;
      }
      setCount(count + 1);
    };
  
    const onRemove = () => {
      if (count === 0) {
        alert("No puede ser menor a 0");
        return;
      }
      setCount(count - 1);
    };





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
    
      <ItemListContainer />
      <ItemCounter stock={count} onAdd={onAdd} onRemove={onRemove} />
    

     </div>
  );
}

export default App;
