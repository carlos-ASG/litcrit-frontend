import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { createBook } from '../api/libros';

// Lista de géneros literarios
const genres = [
  'Ficción', 'No Ficción', 'Fantasía', 'Filosofía', 'Ciencia Ficción', 'Romance', 'Terror', 
  'Suspenso/Thriller', 'Misterio', 'Aventura', 'Histórica', 'Poesía', 
  'Drama', 'Biografía/Autobiografía', 'Autoayuda', 'Infantil/Juvenil', 'Religión/Espiritualidad'
];

const LibrosModal = ({ toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Manejo del envío del formulario
  const onSubmit = async (data) => {
    try {
      const response = await createBook(data);
      console.log('Book created:', response);
      reset(); // Reset the form after successful submission
      toggleModal(); // Close the modal
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Agregar Libro</h2>
          <CloseButton onClick={toggleModal}>X</CloseButton>
        </ModalHeader>
        <Line />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nombre del libro</Label>
          <Input
            placeholder="Nombre del libro"
            {...register('titulo', { required: 'Este campo es obligatorio' })}
            error={errors.name}
          />
          {errors.name && <Error>{errors.name.message}</Error>}

          <Label>Autor</Label>
          <Input
            placeholder="Autor"
            {...register('autor', { required: 'Este campo es obligatorio' })}
            error={errors.author}
          />
          {errors.author && <Error>{errors.author.message}</Error>}

          <Label>Editorial</Label>
          <Input
            placeholder="Editorial"
            {...register('editorial', { required: 'Este campo es obligatorio' })}
            error={errors.publisher}
          />
          {errors.publisher && <Error>{errors.publisher.message}</Error>}

          <Label>Páginas</Label>
          <Input
            type="number"
            placeholder="Páginas"
            {...register('paginas', {
              required: 'Este campo es obligatorio',
              min: { value: 1, message: 'Debe ser un número mayor a 0' },
            })}
            error={errors.pages}
          />
          {errors.pages && <Error>{errors.pages.message}</Error>}

          <Label>Género</Label>
          <Select {...register('categoria', { required: 'Este campo es obligatorio' })} error={errors.genre}>
            <option value="">Seleccionar género</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </Select>
          {errors.genre && <Error>{errors.genre.message}</Error>}

          <Label>Sinpsis</Label>
          <Textarea
            placeholder="Escribe una reseña..."
            {...register('sinpsis', { required: 'Este campo es obligatorio' })}
            error={errors.review}
          />
          {errors.review && <Error>{errors.review.message}</Error>}


          <Label>Imagen</Label>
          <Input
            placeholder="URL de la imagen"
            {...register('imagen', { required: 'Este campo es obligatorio' })}
            error={errors.imagen}
          />
          {errors.imagen && <Error>{errors.imagen.message}</Error>}

          <Button type="submit">Agregar</Button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LibrosModal;

// Estilos del Modal y Formulario
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #d3d3d3;
  margin: 0.5rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff8c00;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin-bottom: 0.25rem;
  display: block;
`;

const Input = styled.input`
  font-family: 'Poppins', sans-serif;
  border: none;
  border-bottom: 2px solid #ffa143;
  padding: 0.5rem 0;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 1rem;
  width: 100%;
  font-size: 1rem;
  ${(props) => props.error && `
    border-bottom: 2px solid red;
    background-color: #f8d7da;
  `}

  &:focus {
    border-color: #ff8c00;
  }
`;

const Select = styled.select`
  font-family: 'Poppins', sans-serif;
  border: 2px solid #ffa143;
  padding: 0.5rem;
  outline: none;
  width: 100%;
  margin-bottom: 1rem;
  ${(props) => props.error && `
    border: 2px solid red;
    background-color: #f8d7da;
  `}
`;

const Textarea = styled.textarea`
  font-family: 'Poppins', sans-serif;
  border: 1px solid #ffa143;
  border-radius: 5px;
  padding: 0.5rem;
  resize: none;
  height: 100px;
  outline: none;
  margin-bottom: 1rem;
  width: 100%;
  ${(props) => props.error && `
    border: 1px solid red;
    background-color: #f8d7da;
  `}

  &:focus {
    border-color: #ff8c00;
  }
`;

const Stars = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Star = styled.span`
  font-size: 2rem;
  cursor: pointer;
  color: #d3d3d3;

  &.active {
    color: #ffd700;
  }
`;

const Button = styled.button`
  font-weight: 400;
  background-color: #ffa143;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  &:hover {
    font-weight: 500;
    background-color: rgba(255, 161, 67, 0.77);
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;
