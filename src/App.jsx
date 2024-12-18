import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthorGallery from './components/AuthorGallery';
import BookGallery from './components/BookGallery';
import BookDetail from './components/BookDetail';
import AuthorDetail from './components/AuthorDetail';
import './index.css';
import Libros from './pages/Libros';
import Autores from './pages/Autores';
import Perfil from './pages/Perfil';
import Login from './pages/Login';
import Registro from './pages/Registro';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/author/:id" element={<AuthorDetail />} />
      <Route path="/" element={<AuthorGallery />} />
        <Route path="/" element={<BookGallery />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/galeria-libros" element={<BookGallery />} />
        <Route path="/libros" element={<Libros />} />
        <Route path="/autores" element={<Autores />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
