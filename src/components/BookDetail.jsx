import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../api/libros';

const BookDetail = () => {
  const { id } = useParams(); // Obtener el ID del libro desde la URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const fetchedBook = await getBookById(id); // Llamada a la API para obtener el libro por ID
        setBook(fetchedBook);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <p>Cargando detalles del libro...</p>;
  }

  return (
    <div className="book-detail">
      <img src={book.imagen} alt={book.titulo} style={{ maxWidth: '200px' }} />
      <h1>{book.titulo}</h1>
      <h3>Autor: {book.autor}</h3>
      <p><strong>Sinopsis:</strong> {book.sinopsis}</p>
    </div>
  );
};

export default BookDetail;
