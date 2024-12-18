import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthorById, getAuthorByName } from '../api/autores'; // Función para obtener un autor por nombre
import '../styles/AuthorDetail.css';

const AuthorDetail = () => {
  const { id } = useParams(); // Captura el nombre desde la URL
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      if (id) { // Verifica que nombre no sea undefined
        try {
          const data = await getAuthorById(id);
          setAuthor(data);
        } catch (error) {
          console.error('Error fetching author details:', error);
        }
      }
    };
  
    fetchAuthorDetails();
  }, [id]);
  
  if (!author) {
    return <p>Cargando detalles del autor...</p>;
  }

  return (
    <div className="author-detail">
      <h1>{author.nombre}</h1>
      <div className="author-info">
        <img src={author.imagen} alt={author.nombre} />
        <div className="details">
          <p><strong>Género Literario:</strong> {author.genero}</p>
          <p><strong>Nacionalidad:</strong> {author.nacionalidad}</p>
          <p><strong>Biografía:</strong></p>
          <p>{author.biografia}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetail;
