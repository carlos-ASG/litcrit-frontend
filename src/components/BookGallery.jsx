import React from 'react';
import '../styles/BookGallery.css';
import { Link } from 'react-router-dom';

const books = {
  Romance: [
    { id: 1, title: 'Bajo la misma estrella', author: 'John Green', image: '/images/bajo-la-misma-estrella.jpg' },
    { id: 2, title: 'La farsa de amor a la española', author: 'Elena Armas', image: '/images/farsa-de-amor.jpg' },
    { id: 3, title: 'Fabricante de lágrimas', author: 'Erin Doom', image: '/images/fabricante-de-lagrimas.jpg' },
    { id: 4, title: 'El arte de ser nosotros', author: 'Inma Rubiales', image: '/images/el-arte-de-ser-nosotros.jpg' },
  ],
  'Ciencia ficción': [
    { id: 5, title: 'Fuego y sangre', author: 'George R. R. Martin', image: '/images/fuego-y-sangre.webp' },
    { id: 6, title: 'Alas de Hierro', author: 'Julie Kagawa', image: '/images/alas-de-hierro.jpg' },
    { id: 7, title: 'El problema de los tres cuerpos', author: 'Cixin Liu', image: '/images/problema-tres-cuerpos.jpg' },
    { id: 8, title: 'La quinta estación', author: 'N. K. Jemisin', image: '/images/quinta-estacion.jpg' },
  ],
  Horror: [
    { id: 9, title: 'It', author: 'Stephen King', image: '/images/it.jpg' },
    { id: 10, title: 'El exorcista', author: 'William Peter Blatty', image: '/images/exorcista.jpg' },
    { id: 11, title: 'La casa infernal', author: 'Richard Matheson', image: '/images/casa-infernal.jpg' },
    { id: 12, title: 'En las montañas de la locura', author: 'H. P. Lovecraft', image: '/images/montanas.jpg' },
  ],
  Autoayuda: [
    { id: 13, title: 'Los 7 hábitos de la gente altamente efectiva', author: 'Stephen R. Covey', image: '/images/7habitos.png' },
    { id: 14, title: 'Hábitos atómicos', author: 'James Clear', image: '/images/habitos-atomicos.jpg' },
    { id: 15, title: 'El poder del ahora', author: 'Eckhart Tolle', image: '/images/poder-ahora.jpg' },
    { id: 16, title: 'Piense y hágase rico', author: 'Napoleon Hill', image: '/images/Piense.jpg' },
  ],
};

const BookGallery = () => {
  return (
    <div className="gallery">
      {Object.entries(books).map(([genre, booksList]) => (
        <div key={genre} className="category">
          <h2>{genre}</h2>
          <div className="books">
            {booksList.map((book) => (
              <div key={book.id} className="book">
                <Link to={`/book/${book.id}`}>
                  <img src={book.image} alt={book.title} />
                  <p>{book.title}</p>
                  <span>{book.author}</span>
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
