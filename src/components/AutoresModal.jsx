import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { createAuthor } from '../api/autores';

const nationalities = [
  'Argentina', 'España', 'México', 'Colombia', 'Chile', 'Perú', 'Francia', 
  'Estados Unidos', 'Reino Unido', 'Brasil', 'Alemania', 'Italia', 'Japón'
];

const genres = [
  'Ficción', 'Filosofía', 'Ciencia Ficción', 'Romance', 'Horror', 
  'Autoayuda', 
];

const AutoresModal = ({ toggleModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Manejo del envío del formulario
  const onSubmit = async (data) => {
    const response = await createAuthor(data);
    console.log('author created:', response);
    reset();
    // Lógica para enviar los datos (puedes agregar una API o algo similar)
    reset(); // Resetear el formulario después de enviar
    toggleModal(); // Cerrar el modal
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Agregar Autor</h2>
          <CloseButton onClick={toggleModal}>X</CloseButton>
        </ModalHeader>
        <Line />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nombre del autor</Label>
          <Input
            placeholder="Nombre del autor"
            {...register('nombre', { required: 'Este campo es obligatorio' })}
            error={errors.name}
          />
          {errors.name && <Error>{errors.name.message}</Error>}

          <Label>Nacionalidad</Label>
          <Select {...register('nacionalidad', { required: 'Este campo es obligatorio' })} error={errors.nationality}>
            <option value="">Seleccionar nacionalidad</option>
            {nationalities.map((nationality, index) => (
              <option key={index} value={nationality}>{nationality}</option>
            ))}
          </Select>
          {errors.nationality && <Error>{errors.nationality.message}</Error>}

          <Label>Género Literario</Label>
          <Select {...register('genero', { required: 'Este campo es obligatorio' })} error={errors.genre}>
            <option value="">Seleccionar género</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </Select>
          {errors.genre && <Error>{errors.genre.message}</Error>}

          <Label>Biografia</Label>
          <Textarea
            placeholder="Escribe una biografia..."
            {...register('biografia', { required: 'Este campo es obligatorio' })}
            error={errors.biografia}
          />
          {errors.biografia && <Error>{errors.biografia.message}</Error>}

          <Label>Imagen (URL)</Label>
          <Input
            placeholder="URL de la imagen"
            {...register('imagen', { required: 'Este campo es obligatorio' })}
            error={errors.image}
          />
          {errors.image && <Error>{errors.image.message}</Error>}

          <Button type="submit">Agregar</Button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AutoresModal;

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
  padding: 1.5rem; /* Reducido espacio */
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
  gap: 0.75rem; /* Reducido espacio entre los campos */
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
