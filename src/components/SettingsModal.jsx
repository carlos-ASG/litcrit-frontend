import React, { useState } from 'react';
import '../styles/SettingsModal.css';

const SettingsModal = ({ onClose }) => {
  const [profileData, setProfileData] = useState({
    username: '',
    email: '',
    bio: '',
    genres: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // AQUI VA LO DE GUARDAR LOS DATOS
    console.log('Datos guardados:', profileData);
    onClose(); // CERRAR MODAL DESPUES DE GUARDAR
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Configuración de perfil</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input
              type="text"
              name="username"
              value={profileData.username}
              onChange={handleInputChange}
              placeholder="Usuario"
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              placeholder="Correo"
            />
          </label>
          <label>
            Sobre mí:
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
              placeholder="Agrega algo sobre ti..."
            />
          </label>
          <label>
            Géneros literarios:
            <input
              type="text"
              name="genres"
              value={profileData.genres}
              onChange={handleInputChange}
              placeholder="Géneros literarios"
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              name="password"
              value={profileData.password}
              onChange={handleInputChange}
              placeholder="Contraseña"
            />
          </label>
          <button type="submit" className="save-button">GUARDAR</button>
        </form>
        <button className="close-modal" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default SettingsModal;
