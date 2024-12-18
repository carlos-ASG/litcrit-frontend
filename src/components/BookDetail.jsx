import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../styles/BookDetail.css';

const bookDetails = {
  1: {
    title: 'Bajo la misma estrella',
    author: 'John Green',
    synopsis: 'Una emotiva historia de amor y pérdida.',
    image: '/images/bajo-la-misma-estrella.jpg',
  },
  2: {
    title: 'La farsa de amor a la española',
    author: 'Elena Armas',
    synopsis: 'Una comedia romántica encantadora.',
    image: '/images/farsa-de-amor.jpg',
  },
  // Agrega detalles para otros libros...
};

const BookDetail = () => {
  const { id } = useParams();
  const book = bookDetails[id];

  // Manejo de reseñas
  const [reviews, setReviews] = useState([]); // Estado local para las reseñas
  const [reviewText, setReviewText] = useState(''); // Estado para el texto de la reseña

  if (!book) {
    return <div>Libro no encontrado.</div>;
  }

  // Función para manejar el envío de reseñas
  const handleAddReview = () => {
    if (reviewText.trim() === '') {
      alert('Por favor, escribe una reseña.');
      return;
    }

    const newReview = {
      text: reviewText,
      date: new Date().toLocaleString(), // Fecha y hora actual
    };

    setReviews((prevReviews) => [...prevReviews, newReview]); // Agrega la nueva reseña
    setReviewText(''); // Limpia el campo de texto
  };

  return (
    <div className="book-detail">
      <img src={book.image} alt={book.title} />
      <h1>{book.title}</h1>
      <h3>Autor: {book.author}</h3>
      <p>{book.synopsis}</p>

      {/* Formulario para publicar reseñas */}
      <div className="review-form">
        <h2>Escribe una reseña</h2>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Escribe tu reseña aquí..."
          rows="4"
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <button onClick={handleAddReview} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Publicar reseña
        </button>
      </div>

      {/* Mostrar reseñas */}
      <div className="reviews">
        <h2>Reseñas</h2>
        {reviews.length === 0 ? (
          <p>No hay reseñas publicadas aún.</p>
        ) : (
          reviews.map((review, index) => (
            <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
              <p style={{ marginBottom: '5px' }}>{review.text}</p>
              <small style={{ color: '#666' }}>Publicado el {review.date}</small>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookDetail;
