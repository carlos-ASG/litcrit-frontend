import React, { useState } from "react";
import "./../styles/PublicarResena.css";

const PublicarReseña = () => {
  const [rating, setRating] = useState(0);

  // Manejar calificación
  const handleRating = (index) => setRating(index);

  return (
    <div className="container">
      <div>
        <h2>PUBLICAR RESEÑA</h2>
        <p className="subtitle">
          ¡Exprésate y comparte tu experiencia sobre ese libro que te marcó!
        </p>
        <form>
          <label>Título</label>
          <input type="text" />

          <label>Autor</label>
          <input type="text" />

          <label>Categoría</label>
          <input type="text" />

          <label>Imagen</label>
          <input type="file" />

          <label>Calificación</label>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((index) => (
              <span
                key={index}
                className={`star ${index <= rating ? "active" : ""}`}
                onClick={() => handleRating(index)}
              >
                ★
              </span>
            ))}
          </div>

          <label>Reseña</label>
          <textarea placeholder="Escribe aquí tu reseña..." />

          <button type="submit">PUBLICAR</button>
        </form>
      </div>
    </div>
  );
};

export default PublicarReseña;
