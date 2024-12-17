import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { register } from "../api/auth";

const Registro = () => {
  const { register: formRegister, handleSubmit, formState: { errors }, watch } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { username, password } = data;
      const response = await register(username, password); // Enviar solo usuario y contraseña
      setSuccessMessage("¡Registro exitoso! Ahora puedes iniciar sesión.");
      console.log("Registro exitoso:", response);
    } catch (error) {
      setErrorMessage("Hubo un error en el registro. Inténtalo de nuevo.");
      console.error("Error en el registro:", error);
    }
  };

  return (
    <Container>
      <div>
        <Title>Registro</Title>
        <Line />
        <Subtitle>Crea tu cuenta para disfrutar de todos los beneficios</Subtitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Usuario</Label>
          {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
          <Input
            type="text"
            placeholder="Ingresa tu nombre de usuario"
            {...formRegister("username", {
              required: "El usuario es obligatorio",
              minLength: { value: 3, message: "El usuario debe tener al menos 3 caracteres" },
            })}
            error={errors.username}
          />

          <Label>Contraseña</Label>
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          <Input
            type="password"
            placeholder="Ingresa tu contraseña"
            {...formRegister("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 8, message: "La contraseña debe tener al menos 8 caracteres" }
            })}
            error={errors.password}
          />

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} {/* Mostrar mensaje de error */}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>} {/* Mostrar mensaje de éxito */}
          
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

const SuccessMessage = styled.p`
  color: green;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;
