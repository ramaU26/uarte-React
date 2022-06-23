import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        
          <li className="nav-item">
            <Link className='nav-link' to='/'>Inicio</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to='/Usuarios'>Usuarios</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to='/Clases'>Clases</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to='/pokemon'>Pokemon</Link>
          </li>
          <li>
            <Link to="cart" clasName="cart">
            <div>
            <i class='fas fa-shopping-cart' style={{fontSize:"36px"}}></i>
           <span>0</span>
           </div>
              </Link>      
  

          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar