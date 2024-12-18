import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookById } from '../api/libros';
import '../styles/BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]); // Almacena las reseñas publicadas
  const [newReview, setNewReview] = useState(''); // Reseña escrita
  const [userName, setUserName] = useState(''); // Nombre del usuario

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const fetchedBook = await getBookById(id);
        setBook(fetchedBook);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === '' || userName.trim() === '') return; // Validar campos vacíos

    const newReviewEntry = {
      nombre: userName,
      contenido: newReview,
      fecha: new Date().toLocaleDateString('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };

    setReviews([...reviews, newReviewEntry]); // Agregar nueva reseña
    setNewReview(''); // Limpiar campo reseña
    setUserName(''); // Limpiar campo nombre
  };

  if (!book) {
    return <p>Cargando detalles del libro...</p>;
  }

  return (
    <div className="book-detail-container">
      <div className="book-image">
        <img src={book.imagen} alt={book.titulo} />
      </div>
      <div className="book-info">
        <h1>{book.titulo}</h1>
        <p><strong>Autor:</strong> <em>{book.autor}</em></p>
        <p><strong>Categoría:</strong> {book.categoria || 'N/A'}</p>
        <p><strong>Editorial:</strong> {book.editorial || 'N/A'}</p>
        <p><strong>Paginas:</strong> {book.paginas || 'N/A'}</p>
        <div className="book-synopsis">
          <p>{book.sinpsis}</p>
        </div>

        {/* Sección de reseñas */}
        <div className="book-reviews">
          <h2>Reseñas</h2>
          <ul>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <li key={index} className="review-item">
                  <p><strong>{review.nombre}</strong> <span>({review.fecha})</span></p>
                  <p>{review.contenido}</p>
                </li>
              ))
            ) : (
              <p>No hay reseñas aún. ¡Sé el primero en escribir una!</p>
            )}
          </ul>

          {/* Formulario para agregar una reseña */}
          <form onSubmit={handleReviewSubmit} className="review-form">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Tu nombre"
            />
            <textarea
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
              placeholder="Escribe tu reseña aquí..."
              rows="4"
            />
            <button type="submit">Publicar reseña</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
