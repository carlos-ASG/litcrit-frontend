import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const bookDetails = {
  1: { title: 'Bajo la misma estrella', author: 'John Green', synopsis: 'Una emotiva historia de amor y pérdida.', image: '/images/bajo-la-misma-estrella.jpg' },
  2: { title: 'La farsa de amor a la española', author: 'Elena Armas', synopsis: 'Una comedia romántica encantadora.', image: '/images/farsa-de-amor.jpg' },
};

const BookDetail = () => {
  const { id } = useParams();
  const book = bookDetails[id];

  if (!book) {
    return <NotFound>Libro no encontrado</NotFound>;
  }

  return (
    <BookDetailContainer>
      <BookImage src={book.image} alt={book.title} />
      <BookInfo>
        <BookTitle>{book.title}</BookTitle>
        <BookAuthor>{book.author}</BookAuthor>
        <BookSynopsis>{book.synopsis}</BookSynopsis>
      </BookInfo>
    </BookDetailContainer>
  );
};

export default BookDetail;

const BookDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  background-color: #f9f9f9;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BookImage = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const BookInfo = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const BookTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const BookAuthor = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const BookSynopsis = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  text-align: justify;
  padding: 0 2rem;
`;

const NotFound = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #ffa143;
  text-align: center;
  margin-top: 3rem;
`;
