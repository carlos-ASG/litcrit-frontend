import React, { useEffect, useState } from 'react';
import '../styles/AuthorGallery.css';
import { Link } from 'react-router-dom';
import { getAllAuthors } from '../api/autores'; // Asegúrate de tener esta función en tu archivo de API

const AuthorGallery = () => {
  const [authors, setAuthors] = useState({
    Romance: [],
    'Ciencia ficción': [],
    Horror: [],
    Autoayuda: [],
    Filosofía: []
  });

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const datos = await getAllAuthors();
        const romance = datos.filter((author) => author.genero === 'Romance');
        const cienciaF = datos.filter((author) => author.genero === 'Ciencia ficción');
        const horror = datos.filter((author) => author.genero === 'Horror');
        const autoA = datos.filter((author) => author.genero === 'Autoayuda');
        const filosofia = datos.filter((author) => author.genero === 'Filosofía');
        const ficcion = datos.filter((author) => author.genero === 'Ficción');
        setAuthors({
          Romance: romance,
          'Ciencia ficción': cienciaF,
          Horror: horror,
          Autoayuda: autoA,
          Filosofía: filosofia,
            'Ficción': ficcion
        });
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchAuthors();
  }, []);

  return (
    <div className="gallery">
      {Object.entries(authors).map(([categoria, authorsList]) => (
        <div key={categoria} className="category">
          <h2>{categoria}</h2>
          <div className="authors">
            {authorsList.map((author) => (
              <div key={author.nombre} className="author">
                <Link to={`/author/${author.nombre}`}>
                  <img src={author.imagen} alt={author.nombre} />
                  <p>{author.nombre}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AuthorGallery;
