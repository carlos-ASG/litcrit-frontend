import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LitCritLogo from "../assets/LitCrit1.svg";
import { login } from "../api/auth";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const { username, password } = data;
      const response = await login(username, password);
      console.log("Respuesta del login:", response);
      
      // Si el login es exitoso, guarda el token de acceso y redirige
      localStorage.setItem("access_token", response.access_token);
      localStorage.setItem("username", username); // Guardar el nombre de usuario
      navigate("/libros");
    } catch (error) {
      setErrorMessage("Usuario o contraseña incorrectos"); 
    }
  };

  return (
    <LoginContainer>
      <Logo src={LitCritLogo} alt="LitCrit Logo" />
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Usuario</Label>
          <Input
            type="text"
            placeholder="Ingresa tu usuario"
            {...register("username", {
              required: "El usuario es obligatorio",
              minLength: { value: 3, message: "El usuario debe tener al menos 3 caracteres" }
            })}
            error={errors.username}
          />
          {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}

          <Label>Contraseña</Label>
          <Input
            type="password"
            placeholder="Ingresa tu contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: { value: 6, message: "La contraseña debe tener al menos 6 caracteres" }
            })}
            error={errors.password}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>} {/* Mostrar mensaje de error */}
          
          <Button type="submit">Ingresar</Button>
          <SecondaryButton type="button" onClick={() => navigate("/registro")}>Registrarse</SecondaryButton>
        </form>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f9fc;
`;

const Logo = styled.img`
  width: 150px;
  margin-bottom: 2rem;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin-bottom: 1.5rem;
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
  font-weight: 500;
  background-color: #ffa143;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgba(255, 161, 67, 0.77);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #f1f1f1;
  color: #555;
  &:hover {
    background-color: #e2e2e2;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
  position: relative;
`;
