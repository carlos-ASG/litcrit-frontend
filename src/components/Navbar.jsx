import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import libro from '../assets/libro.png';
import autor from '../assets/autor.png';
import publicar from '../assets/publicar.png';
import usuario from '../assets/usuario.png';
import { HiMenu } from 'react-icons/hi';
import { HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">LitCrit</div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/libros" onClick={closeMenu}>
          <img src={libro} alt="Libros" className="nav-icon" /> LIBROS
        </Link>
        <Link to="/autores" onClick={closeMenu}>
          <img src={autor} alt="Autores" className="nav-icon" /> AUTORES
        </Link>
        <Link to="/publicar" onClick={closeMenu}>
          <img src={publicar} alt="Publicar" className="nav-icon" /> PUBLICAR
        </Link>
      </div>
      <input className="search" placeholder="Buscar..." />
      <div className="user-icon">
        <Link to="/perfil" onClick={closeMenu}>
          <img src={usuario} alt="Perfil" className="nav-icon" />
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;
