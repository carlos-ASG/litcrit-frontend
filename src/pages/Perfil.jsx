import React, { useState } from "react";
import styled from "styled-components";
import SettingsModal from "../components/SettingsModal";

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

const PerfilAvatar = styled.div`
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
  }
`;

const PerfilUserInfo = styled.div`
  text-align: left;
`;

const PerfilUsername = styled.h3`
  margin: 0;
  font-weight: bold;
  font-size: 1.5rem;
`;

const PerfilUserEmail = styled.p`
  margin: 0;
  color: #888;
`;

const PerfilUserDescription = styled.p`
  margin-top: 0.5rem;
  color: #666;
`;

const SettingsIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  color: #ffa143;
  &:hover {
    color: #ff8c00;
  }
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

const Perfil = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <PerfilContainer>
      <PerfilHeader>Tu Perfil</PerfilHeader>
      <Line />
      <PerfilCard>
        <PerfilAvatar>
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de Perfil"
          />
        </PerfilAvatar>
        <PerfilUserInfo>
          <PerfilUsername>Usuario</PerfilUsername>
          <PerfilUserEmail>correo@ejemplo.com</PerfilUserEmail>
          <PerfilUserDescription>¡Comparte algo acerca de ti!</PerfilUserDescription>
        </PerfilUserInfo>
        <SettingsIcon onClick={toggleSettings}>⚙️</SettingsIcon>
      </PerfilCard>
      {showSettings && <SettingsModal closeModal={toggleSettings} />}
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
    </PerfilContainer>
  );
};

export default Perfil;
