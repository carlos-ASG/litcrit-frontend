import React, { useState } from 'react';
import styled from 'styled-components';
import AutoresModal from '../components/AutoresModal';
import addIcon from '../assets/add.svg';
import AuthorGallery from '../components/AuthorGallery';

const Autores = () => {
  const [showModal, setShowModal] = useState(false);

  // Función para abrir y cerrar el modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Title>Autores</Title>
      <AuthorGallery />
      <AddButton onClick={toggleModal}>
        <img src={addIcon} alt="Agregar autor" />
      </AddButton> 

      {showModal && (
        <AutoresModal toggleModal={toggleModal} />
      )}
    </Container>
  );
};

export default Autores;

const Container = styled.div`
  margin: 2rem auto;
  width: 80%;
  max-width: 1000px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

// Botón sticky con degradado anaranjado en la esquina superior derecha
const AddButton = styled.div`
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
