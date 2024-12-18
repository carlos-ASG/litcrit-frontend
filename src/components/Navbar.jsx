import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HiMenu, HiX } from 'react-icons/hi';
import libro from '../assets/libro.svg';
import autor from '../assets/autor.svg';
import usuario from '../assets/usuario.svg';
import logo from '../assets/LitCrit1.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log para verificar el token
    setIsAuthenticated(!!token);
  }, []);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);
  const closeMenu = () => setMenuOpen(false);

  const handleUserClick = () => {
    if (isAuthenticated) {
      console.log('Authenticated, navigating to /perfil');
      navigate('/perfil');
    } else {
      console.log('Not authenticated, navigating to /login');
      navigate('/login');
    }
    closeMenu();
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Execute your search method here
      console.log('Search term:', searchTerm);
      // You can call a method to perform the search, e.g., searchBooks(searchTerm);
    }
  };

  return (
    <NavbarContainer>
      <Link to="/libros">
        <img src={logo} alt="LitCrit Logo" style={{ width: '80px' }} />
      </Link>

      <NavLinks active={menuOpen}>
        <NavLink to="/libros" onClick={closeMenu}>
          <img src={libro} alt="Libros" style={{ width: '25px' }} /> LIBROS
        </NavLink>
        <NavLink to="/autores" onClick={closeMenu}>
          <img src={autor} alt="Autores" style={{ width: '25px' }} /> AUTORES
        </NavLink>
      </NavLinks>
      <SearchInput
        type="text"
        placeholder="Bucar libro..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleSearch}
      />
      
      <UserIcon onClick={handleUserClick}>
        <img src={usuario} alt="Perfil" style={{ width: '25px' }} />
      </UserIcon>

      <Hamburger onClick={toggleMenu}>
        {menuOpen ? <HiX size={25} /> : <HiMenu size={25} />}
      </Hamburger>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #ffa143, #ffcb64);
  padding: 0.6rem 2rem;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 8px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: ${(props) => (props.active ? 'linear-gradient(45deg, #ffa143, #ffcb64)' : 'transparent')};
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
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease, background 0.3s ease;
  border-radius: 5px;
  padding: 0.4rem 0.8rem;

  &:hover {
    background: none;
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

const UserIcon = styled.div`
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
  padding: 0.3rem;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;