import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de usar "Routes" en lugar de "Route"
import Navbar from './components/Navbar';
import PublicarResena from './pages/PublicarResena';
import Libros from './pages/Libros';
import Autores from './pages/Autores';
import Perfil from './pages/Perfil';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/publicar" element={<PublicarResena />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  );
}

export default App;
