import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navegacion/Navbar.jsx';
import Inicio from './components/navegacion/pag/Inicio.jsx';
import {useState} from 'react';
import ItemCounter from './components/itemcount/ItemCount';
import ItemListContainer from './components/itemlistconteiner/itemListContainer';
import Clases from './components/navegacion/pag/Clases.jsx';
import Pokemon from './components/navegacion/pag/pokemon';
import Usuarios from './components/navegacion/pag/Usuarios';
import Cart from './cart/cart';


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
       <Navbar/>
    
        <Routes>
           <Route path='/' element={<Inicio/>}/>
           <Route path='/pokemon' element={<ItemListContainer/>}/>
           <Route path='/pokemon/:id' element={<Pokemon/>}/>
           <Route path='/Clases/:id' element={<Clases/>}/>
           <Route path='/Usuarios' element={<Usuarios/>}/>
           <Route path='/cart' element={<Cart/>}/>
         </Routes>
     </Router>
    
      <ItemCounter stock={count} onAdd={onAdd} onRemove={onRemove} />
    

     </div>
  );
}

export default App;
