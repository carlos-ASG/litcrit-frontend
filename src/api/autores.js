import axios from 'axios';

const API_URL = 'http://localhost:5000/autores';

// Create a new author
export const createAuthor = async (authorData) => {
  try {
    const response = await axios.post(`${API_URL}`, authorData);
    return response.data;
  } catch (error) {
    console.error('Error creating author:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Get all authors
export const getAllAuthors = async () => {
  try {
    const response = await axios.get(`${API_URL}/getAll`);
    return response.data;
  } catch (error) {
    console.error('Error fetching authors:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Get a single author by ID
export const getAuthorById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching author:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Update an author by ID
export const updateAuthor = async (id, authorData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, authorData);
    return response.data;
  } catch (error) {
    console.error('Error updating author:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// Delete an author by ID
export const deleteAuthor = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting author:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};