import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import { getAuthorById } from '../api/autores'; // Función para obtener un autor por nombre
import '../styles/AuthorDetail.css';

const AuthorDetail = () => {
  const { id } = useParams(); // Captura el ID desde la URL
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthorDetails = async () => {
      if (id) { // Verifica que id no sea undefined
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
    <div className="author-detail-container">
      <div className="author-header">
        <img src={author.imagen} alt={author.nombre} className="author-image" />
        <div className="author-info">
          <h1 className="author-name">{author.nombre}</h1>
          <p><strong>Género Literario:</strong> {author.genero}</p>
          <p><strong>Nacionalidad:</strong> {author.nacionalidad}</p>
        </div>
      </div>
      <div className="author-description">
        <h2>Biografía</h2>
        <p>{author.biografia}</p>
      </div>
    </div>
  );
};

export default AuthorDetail;
