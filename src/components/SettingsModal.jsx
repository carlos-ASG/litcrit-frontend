import React, { useState } from 'react';
import styled from 'styled-components';
import '@fontsource/poppins';

const fontStyles = `
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  ${fontStyles}
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const ModalHeader = styled.h2`
  ${fontStyles}
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 1.8rem;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #d3d3d3;
  margin: 0.5rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  ${fontStyles}
  margin: 10px 20px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  ${fontStyles}
  margin: 10px 0;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const GenresContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const GenreLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  padding: 5px;
`;

const SaveButton = styled.button`
  ${fontStyles}
  font-weight: 400;
  background-color: #ffa143;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    font-weight: 500;
    background-color: rgba(255, 161, 67, 0.77);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const SettingsModal = ({ closeModal }) => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: '',
    genres: [],
    password: '',
  });

  const genresList = [
    'Ficción',
    'No Ficción',
    'Fantasía',
    'Ciencia Ficción',
    'Romance',
    'Terror',
    'Suspenso/Thriller',
    'Misterio',
    'Aventura',
    'Histórica',
    'Poesía',
    'Drama',
    'Biografía/Autobiografía',
    'Autoayuda',
    'Infantil/Juvenil',
    'Religión/Espiritualidad',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleGenreChange = (genre) => {
    const isSelected = profileData.genres.includes(genre);

    // Agregar o quitar género según su estado actual
    const updatedGenres = isSelected
      ? profileData.genres.filter((g) => g !== genre) // QUITAR SI YA ESTA SELECCIONADO
      : [...profileData.genres, genre]; // AGREGAR SI NO ESTA SELECCIONADO

    setProfileData({ ...profileData, genres: updatedGenres });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos guardados:', profileData);
    closeModal(); // CERRAR MODAL DESPUES DE GUARDAR
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>Configuración</ModalHeader>
        <Line />
        <Form onSubmit={handleSubmit}>
          <label>
            Usuario
            <Input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
              placeholder="Usuario"
            />
          </label>
          <label>
            Correo
            <Input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              placeholder="Correo"
            />
          </label>
          <label>
            Sobre mí
            <TextArea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              placeholder="Agrega algo sobre ti..."
            />
          </label>
          <label>
            Géneros literarios
            <GenresContainer>
              {genresList.map((genre) => (
                <GenreLabel key={genre}>
                  <input
                    type="checkbox"
                    checked={profileData.genres.includes(genre)}
                    onChange={() => handleGenreChange(genre)}
                  />
                  {genre}
                </GenreLabel>
              ))}
            </GenresContainer>
          </label>
          <label>
            Contraseña
            <Input
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </label>
          <SaveButton type="submit">GUARDAR</SaveButton>
        </Form>
        <CloseButton onClick={closeModal}>X</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SettingsModal;
