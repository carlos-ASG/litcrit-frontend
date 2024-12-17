import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Logout from "../assets/logout.svg";
import { useNavigate } from "react-router-dom";

const Perfil = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // Función para manejar el logout con confirmación
  const handleLogout = () => {
    const confirmation = window.confirm("¿Estás seguro de que quieres salir?");
    if (confirmation) {
      localStorage.removeItem("access_token");  // Elimina el token de acceso
      localStorage.removeItem("username");      // Elimina el nombre de usuario (si es necesario)
      navigate("/login"); // Redirige al usuario a la página de login
    }
  };

  return (
    <PerfilContainer>
      <PerfilHeader>Tu Perfil</PerfilHeader>
      <Line />
      <PerfilCard>
        <PerfilUserInfo>
          <PerfilUsername>{username || 'Usuario no encontrado'}</PerfilUsername>
        </PerfilUserInfo>
      </PerfilCard>
      <ReseñasSection>
        <ReseñasTitle>Reseñas</ReseñasTitle>
        <Reseña>
          <BookTitle>El gran libro de aventuras</BookTitle>
          <BookReview>
            ¡Me encantó este libro! Muy inspirador y lleno de emoción.
          </BookReview>
        </Reseña>
        <Reseña>
          <BookTitle>La sombra de la luna</BookTitle>
          <BookReview>
            Fascinante historia de misterio. No pude dejar de leerlo.
          </BookReview>
        </Reseña>
      </ReseñasSection>
      
      {/* Botón Logout */}
      <LogoutButton onClick={handleLogout}>
        <img src={Logout} alt="Logout" />
      </LogoutButton>
    </PerfilContainer>
  );
};

const PerfilContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: center;
  font-family: 'Poppins', sans-serif;
`;

const PerfilHeader = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #d3d3d3;
  margin: 1.5rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const PerfilCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #fff;
  border: 1px solid #ffa143;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const PerfilUserInfo = styled.div`
  text-align: left;
`;

const PerfilUsername = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.3rem;
`;

const ReseñasSection = styled.div`
  margin-top: 2rem;
`;

const ReseñasTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Reseña = styled.div`
  background-color: #fff;
  border: 1px solid #ffa143;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BookTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0;
`;

const BookReview = styled.p`
  color: #666;
`;

// Estilos para el botón sticky
const LogoutButton = styled.div`
  position: fixed;
  top: 120px;
  right: 20px;
  background: linear-gradient(135deg, #ff8c00, #ff5e00);
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    background: linear-gradient(135deg, #ff5e00, #ff8c00);
  }
`;

export default Perfil;
