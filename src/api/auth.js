import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      contra: password,
    });
    return response.data; // DEVUELVE EL TOKEN DE ACCESO
  } catch (error) {
    console.error('Error en el login:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export const register = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      contra: password,
    });
    return response.data;
  } catch (error) {
    console.error('Error en el registro:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
