import React, { useEffect, useState } from 'react';
import '../styles/BookGallery.css';
import { Link } from 'react-router-dom';
import { getAllBooks } from '../api/libros';

const BookGallery = () => {
  const [books, setBooks] = useState({
    Romance: [],
    'Ciencia ficción': [],
    Horror: [],
    Autoayuda: [],
    Filosofía: []
  });

  useEffect(() => {
    const conseguirLirbos = async () => {
      try {
        const datos = await getAllBooks();
        const filosofia = datos.filter((book) => book.categoria === 'Filosofia');
        const romance = datos.filter((book) => book.categoria === 'Romance');
        const cienciaF = datos.filter((book) => book.categoria === 'Ciencia Ficción');
        const ficcion = datos.filter((book) => book.categoria === 'Ficción');
        const horror = datos.filter((book) => book.categoria === 'Horror');
        const autoA = datos.filter((book) => book.categoria === 'Autoayuda');
        const fantasia = datos.filter((book) => book.categoria === 'Fantasia');
        const infantil = datos.filter((book) => book.categoria === 'Infantil');
        const historia = datos.filter((book) => book.categoria === 'Historia');
        setBooks((prevBooks) => ({
          ...prevBooks,
          Filosofía: filosofia,
          Romance: romance,
          "Ciencia ficción": cienciaF,
          Horror: horror,
          Autoayuda: autoA,
          "Ficción": ficcion,
          Fantasia: fantasia,
          Infantil: infantil,
          Historia: historia
        }));
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    conseguirLirbos();
  }, []);

  return (
    <div className="gallery">
      {Object.entries(books).map(([categoria, booksList]) => (
        <div key={categoria} className="category">
          <h2>{categoria}</h2>
          <div className="books">
            {booksList.map((book) => (
              <div key={book._id} className="book">
                <Link to={`/book/${book._id}`}>
                  <img src={book.imagen} alt={book.titulo} />
                  <p>{book.titulo}</p>
                  <span>{book.autor}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGallery;