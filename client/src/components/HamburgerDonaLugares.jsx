import React, { useState } from 'react';
import './HamburgerLugares.css';
import imagenActiva from '../../public/img/hambu.png'
import imagenInactiva from '../../public/img/cruz.png'

const HamburgerLugares = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activo, setActivo] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setActivo(!activo);
  };

  let imagenFuente = activo ? imagenActiva : imagenInactiva

  return (
    <nav className="HamburgerLugares">
      <div className="nombreH">CATEGORÍAS
        <img src={imagenFuente} alt="" onClick={toggleMenu} /></div>

      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <a href="/dona/alimentos">Alimentos</a>
        <a href="/dona/ropa">Ropa</a>
        <a href="/dona/libros">Libros</a>
        <a href="/dona/juguetes">Juguetes</a>
        <a href="/dona/utiles">Útiles escolares</a>
        <a href="/dona/medicamentos">Medicamentos</a>
      </div>

    </nav>
  );
};

export default HamburgerLugares;