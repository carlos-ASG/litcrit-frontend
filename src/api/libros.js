import axios from 'axios';

const API_URL = 'http://localhost:5000/libros';

export const createBook = async (bookData) => {
    try {
      const response = await axios.post(`${API_URL}/insert`, bookData);
      return response.data;
    } catch (error) {
      console.error('Error creating book:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };
  
  
  // Get all books 
  export const getAllBooks = async () => {
    try {
      const response = await axios.get(`${API_URL}/getAll`);
      return response.data;
    } catch (error) {
      console.error('Error fetching books:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };
  
  
  // Get a single book by ID
  export const getBookById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching book:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };
  
  // Update a book by ID
  export const updateBook = async (id, bookData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error('Error updating book:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };
  
  // Delete a book by ID
  export const deleteBook = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting book:', error.response?.data || error.message);
      throw error.response?.data || error.message;
    }
  };