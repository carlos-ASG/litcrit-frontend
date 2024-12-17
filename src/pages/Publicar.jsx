import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const PublicarReseña = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [rating, setRating] = useState(0);

  // Manejar calificación
  const handleRating = (index) => setRating(index);

  const onSubmit = (data) => {
    // Aquí puedes manejar el envío del formulario
    console.log(data);
  };

  return (
    <Container>
      <div>
        <Title>Publicar Reseña</Title>
        <Line />
        <Subtitle>
          ¡Exprésate y comparte tu experiencia sobre ese libro que te marcó!
        </Subtitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Título</Label>
          <Input
            type="text"
            {...register("title", {
              required: "El título es obligatorio",
              maxLength: { value: 100, message: "El título no puede superar los 100 caracteres" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "El título solo puede contener letras y espacios"
              }
            })}
            error={errors.title}
          />

          <Label>Autor</Label>
          <Input
            type="text"
            {...register("author", {
              required: "El autor es obligatorio",
              maxLength: { value: 100, message: "El autor no puede superar los 100 caracteres" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "El autor solo puede contener letras y espacios"
              }
            })}
            error={errors.author}
          />

          <Label>Categoría</Label>
          <Select {...register("category", { required: "La categoría es obligatoria" })} error={errors.category}>
            <option value="">Selecciona un género literario</option>
            <option value="fiction">⭐Ficción</option>
            <option value="nonFiction">⭐No Ficción</option>
            <option value="fantasy">⭐Fantasía</option>
            <option value="sciFi">⭐Ciencia Ficción</option>
            <option value="romance">⭐Romance</option>
            <option value="horror">⭐Terror</option>
            <option value="thriller">⭐Suspenso/Thriller</option>
            <option value="mystery">⭐Misterio</option>
            <option value="adventure">⭐Aventura</option>
            <option value="historical">⭐Histórica</option>
            <option value="poetry">⭐Poesía</option>
            <option value="drama">⭐Drama</option>
            <option value="biography">⭐Biografía/Autobiografía</option>
            <option value="selfHelp">⭐Autoayuda</option>
            <option value="children">⭐Infantil/Juvenil</option>
            <option value="religion">⭐Religión/Espiritualidad</option>
          </Select>

          <Label>Imagen</Label>
          <InputImage
            type="text"
            placeholder="Ingresa la URL de la imagen"
            {...register("image", { required: "La URL de la imagen es obligatoria" })}
            error={errors.image}
          />

          <Label>Calificación</Label>
          <Stars>
            {[1, 2, 3, 4, 5].map((index) => (
              <Star
                key={index}
                className={index <= rating ? "active" : ""}
                onClick={() => handleRating(index)}
              >
                ★
              </Star>
            ))}
          </Stars>

          <Label>Reseña</Label>
          <Textarea
            placeholder="Escribe aquí tu reseña..."
            {...register("review", { required: "La reseña es obligatoria" })}
            error={errors.review}
          />

          <Button type="submit">PUBLICAR</Button>
        </form>
      </div>
    </Container>
  );
};

export default PublicarReseña;

const Container = styled.div`
  margin: 2rem auto;
  width: 80%;
  max-width: 700px;
`;

const Title = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #d3d3d3;
  margin: 0.5rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #555;
`;

const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
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

const InputImage = styled.input`
  font-family: 'Poppins', sans-serif;
  border: none;
  border-bottom: 2px solid #ffa143;
  padding: 0.5rem 0;
  outline: none;
  transition: border-color 0.3s ease;
  margin-bottom: 1rem;
  width: 100%;
  ${(props) => props.error && `
    border-bottom: 2px solid red;
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
