import React from 'react';
import { useParams } from 'react-router-dom';

const bookDetails = {
  1: { title: 'Bajo la misma estrella', author: 'John Green', synopsis: 'Una emotiva historia de amor y pérdida.', image: '/images/bajo-la-misma-estrella.jpg' },
  2: { title: 'La farsa de amor a la española', author: 'Elena Armas', synopsis: 'Una comedia romántica encantadora.', image: '/images/farsa-de-amor.jpg' },
  // Agregar detalles para cada libro aquí...
};

const BookDetail = () => {
  const { id } = useParams();
  const book = bookDetails[id];

  if (!book) {
    return <div>Libro no encontrado.</div>;
  }

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
      <h3>Autor: {book.author}</h3>
      <p>{book.synopsis}</p>
    </div>
  );
};

export default BookDetail;
