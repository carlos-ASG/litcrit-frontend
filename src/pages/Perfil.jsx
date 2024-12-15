import React, { useState } from "react";
import "./../styles/Perfil.css";

const Perfil = () => {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <div className="perfil-container">
      <h2 className="perfil-header">Perfil de Usuario</h2>
      <div className="perfil-card">
        <div className="perfil-avatar">
          <img
            src="https://via.placeholder.com/150"
            alt="Foto de Perfil"
          />
        </div>
        <div className="perfil-user-info">
          <h3 className="perfil-username">Nombre del Usuario</h3>
          <p className="perfil-user-email">correo@ejemplo.com</p>
          <p className="perfil-user-description">
            Aquí va una breve descripción del usuario. ¡Comparte algo acerca de ti!
          </p>
        </div>
        <div className="settings-icon" onClick={toggleSettings}>⚙️</div>
      </div>
      {showSettings && <SettingsModal closeModal={toggleSettings} />}
      <div className="reseñas-section">
        <h3 className="reseñas-title">Reseñas de Libros</h3>
        <div className="reseña">
          <h4 className="book-title">El gran libro de aventuras</h4>
          <p className="book-review">
            ¡Me encantó este libro! Muy inspirador y lleno de emoción.
          </p>
        </div>
        <div className="reseña">
          <h4 className="book-title">La sombra de la luna</h4>
          <p className="book-review">
            Fascinante historia de misterio. No pude dejar de leerlo.
          </p>
        </div>
      </div>
    </div>
  );
};

const SettingsModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>Configuración de Perfil</h2>
        <form>
          <label className="label">Imagen de Perfil:</label>
          <input type="file" accept="image/*" />
          <label className="label">Descripción:</label>
          <textarea placeholder="Escribe una breve descripción sobre ti" />
          <label className="label">Email:</label>
          <input type="email" placeholder="Correo electrónico" />
          <button type="submit" className="save-button">Guardar Cambios</button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
