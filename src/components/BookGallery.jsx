import React from 'react';
import '../styles/BookGallery.css';



// Objeto con datos de libros por categorías
const books = {
  Romance: [
    {
      title: 'Bajo la misma estrella',
      author: 'John Green',
      image: '../public/images/bajo-la-misma-estrella.jpg',
    },
    {
      title: 'La farsa de amor a la española',
      author: 'Elena Armas',
      image: '../public/images/farsa-de-amor.jpg',
    },
    {
      title: 'Fabricante de lágrimas',
      author: 'Erin Doom',
      image: '../public/images/fabricante-de-lagrimas.jpg',
    },
    {
      title: 'El arte de ser nosotros',
      author: 'Inma Rubiales',
      image: '../public/images/el-arte-de-ser-nosotros.jpg',
    },
  ],
  'Ciencia ficción': [
    {
        title: 'Fuego y sangre',
        author: 'George R. R. Martin',
        image: '../public/images/fuego-y-sangre.webp',
      },
    {
      title: 'Alas de Hierro',
      author: 'Julie Kagawa',
      image: '../public/images/alas-de-hierro.jpg',
    },
    {
      title: 'El problema de los tres cuerpos',
      author: 'Cixin Liu',
      image: '../public/images/problema-tres-cuerpos.jpg',
    },
    {
      title: 'La quinta estación',
      author: 'N. K. Jemisin',
      image: '../public/images/quinta-estacion.jpg',
    },
  ],
  'Horror': [
    {
        title: 'It',
        author: 'Stephen King',
        image: '../public/images/it.jpg',
      },
      {
        title: 'El exorcista',
        author: 'William Peter Blatty',
        image: '../public/images/exorcista.jpg',
      },
      {
        title: 'La casa infernal',
        author: 'Richard Matheson',
        image: '../public/images/casa-infernal.jpg',
      },
      {
        title: 'En las montañas de la locura',
        author: 'H. P. Lovecraft',
        image: '../public/images/montanas.jpg',
      },
      {
        title: 'El circo de los extraños',
        author: 'Darren Shan',
        image: '../public/images/circo.jpg',
      }
    
  ],
  'Autoayuda': [
    {
        title: 'Los 7 habitos de la gente altamente efectiva',
        author: 'Stephen R. Covey',
        image: '../public/images/7habitos.png',
      },
      {
        title: 'Habitos atomicos',
        author: 'ames Clear',
        image: '../public/images/habitos-atomicos.jpg',
      },
      {
        title: 'El poder del ahora',
        author: 'Eckhart Tolle',
        image: '../public/images/poder-ahora.jpg',
      },
      {
        title: 'Piense y hagase rico',
        author: 'Napoleon Hill',
        image: '../public/images/piense.jpg',
      },
      {
        title: 'Cómo ganar amigos e influir sobre las personas',
        author: 'Dale Carnegie',
        image: '../public/images/amigos.jpg',
      },
      
    
  ],
};

const BookGallery = () => {
  return (
    <div className="gallery">
      {Object.entries(books).map(([genre, booksList]) => (
        <div key={genre} className="category">
          <h2>{genre}</h2>
          <div className="books">
            {booksList.map((book, index) => (
              <div key={index} className="book">
                <img src={book.image} alt={book.title} />
                <p>{book.title}</p>
                <span>{book.author}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookGallery;
