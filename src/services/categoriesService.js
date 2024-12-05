import axios from 'axios';
import SERVER_URL from '../constantes/api';

export const getCategories = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des catégories:', error);
    throw error;
  }
};


export const addCategory = async (name) => {
  try {
    const response = await axios.post(`${SERVER_URL}/categories`, { nom:name });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la catégorie:', error);
    throw error;
  }
};


export const updateCategory = async (id, name) => {
    console.log(id, name);
    
  try {
    const response = await axios.put(`${SERVER_URL}/categories/${id}`, {nom:name} );
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la modification de la catégorie:', error);
    throw error;
  }
};


export const deleteCategory = async (id) => {
  try {
    await axios.delete(`${SERVER_URL}/categories/${id}`);
  } catch (error) {
    console.error('Erreur lors de la suppression de la catégorie:', error);
    throw error;
  }
};
