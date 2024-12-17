import React from 'react';
import styled from 'styled-components';

const Autores = () => {
  console.log("Componente Autores cargado"); // Agregar un console.log para comprobar
  return (
      <Title>Autores</Title>
  );
};

export default Autores;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;
