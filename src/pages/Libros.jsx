import React from 'react';
import BookGallery from '../components/BookGallery';
import styled from 'styled-components';

const Libros = () => {
  return (
    <Container>
      <Title>Libros</Title>
      <BookGallery />
    </Container>
  );
};

export default Libros;

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

