import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookGallery from './components/BookGallery';
import BookDetail from './components/BookDetail';
import './index.css';
import PublicarResena from './pages/PublicarResena';
import Libros from './pages/Libros';
import Autores from './pages/Autores';
import Perfil from './pages/Perfil';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookGallery />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/libros" element={<BookGallery />} />
        <Route path="/publicar" element={<PublicarResena />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
