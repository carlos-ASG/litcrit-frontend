import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Registro = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <div>
        <Title>Registro</Title>
        <Line />
        <Subtitle>Crea tu cuenta para disfrutar de todos los beneficios</Subtitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Nombre Completo</Label>
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          <Input
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("name", { 
              required: "El nombre es obligatorio", 
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "El nombre solo puede contener letras y espacios"
              } 
            })}
            error={errors.name}
          />

          <Label>Correo Electrónico</Label>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <Input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Ingresa un correo válido"
              }
            })}
            error={errors.email}
          />

          <Label>Contraseña</Label>
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          <Input
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" }
            })}
            error={errors.password}
          />

          <Label>Confirmar Contraseña</Label>
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
          <Input
            type="password"
            placeholder="Confirma tu contraseña"
            {...register("confirmPassword", {
              validate: (value) => value === watch("password") || "Las contraseñas no coinciden"
            })}
            error={errors.confirmPassword}
          />

          <Button type="submit">REGISTRARSE</Button>
        </form>
      </div>
    </Container>
  );
};

export default Registro;

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 0.5rem; /* Espacio más ajustado para mantener diseño limpio */
`;
