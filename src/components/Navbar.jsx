import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiMenu, HiX } from 'react-icons/hi';
import libro from '../assets/libro.svg';
import autor from '../assets/autor.svg';
import publicar from '../assets/publicar.svg';
import usuario from '../assets/usuario.svg';
import logo from '../assets/LitCrit1.svg';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #ffa143, #ffcb64); /* Degradado */
  padding: 0.6rem 2rem; /* Navbar más delgado */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 8px;
`;

const Logo = styled.div`
  font-family: 'Merriweather', serif;
  font-size: 2.2rem;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5rem; /* Aumentar el espacio entre los enlaces */
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: ${(props) => (props.active ? 'linear-gradient(45deg, #ffa143, #ffcb64)' : 'transparent')}; /* Degradado solo al abrir */
    padding: 1rem 0;
    display: ${(props) => (props.active ? 'flex' : 'none')};
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-weight: 400; /* Reducir el grosor de la fuente */
  font-size: 1rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease, background 0.3s ease;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;

  &:hover {
    background: none; /* Sin degradado en hover */
    color: #000;
    font-weight: 600;
    transform: scale(1.05);
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.8); 
  }
`;

const SearchInput = styled.input`
  padding: 0.6rem;
  border-radius: 25px;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  width: 200px;
  transition: width 0.3s ease, background-color 0.3s ease;
  border: none;
  box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    width: 230px;
    background-color: #ffecd1;
    outline: none;
  }
`;

const UserIcon = styled(Link)`
  font-size: 2rem;
  color: #000;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ff8f00;
    transform: scale(1.1);
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  background: linear-gradient(45deg, #ffa143, #ffcb64); 
  padding: 0.3rem; /* Hacerlo más pequeño */
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const closeMenu = () => setMenuOpen(false);

  return (
    <NavbarContainer>
      <img src={logo} alt="LitCrit Logo" style={{ width: '80px' }} />
      
      <NavLinks active={menuOpen}>
        <NavLink to="/libros" onClick={closeMenu}>
          <img src={libro} alt="Libros" style={{ width: '25px' }} /> LIBROS
        </NavLink>
        <NavLink to="/autores" onClick={closeMenu}>
          <img src={autor} alt="Autores" style={{ width: '25px' }} /> AUTORES
        </NavLink>
        <NavLink to="/publicar" onClick={closeMenu}>
          <img src={publicar} alt="Publicar" style={{ width: '25px' }} /> PUBLICAR
        </NavLink>
      </NavLinks>
      <SearchInput placeholder="Buscar..." />
      <UserIcon to="/perfil" onClick={closeMenu}>
        <img src={usuario} alt="Perfil" style={{ width: '25px' }} />
      </UserIcon>
      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <HiX size={25} /> : <HiMenu size={25} />}
      </Hamburger>
    </NavbarContainer>
  );
};

export default Navbar;
