import axios from 'axios';
import SERVER_URL from '../constantes/api';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${SERVER_URL}/produits`);
    console.log (response);
    return response.data; 
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
    throw error; 
  }
};

export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${SERVER_URL}/produits/${id}`);
  } catch (error) {
    console.error('Erreur lors de la suppression du produit:', error);
    throw error;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${SERVER_URL}/produits`, {nom:product.name, prix:product.price, description:product.description, categorie_id:product.category });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout du produit:', error);
    throw error;
  }
};

export const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await axios.put(`${SERVER_URL}/produits/${id}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la modification du produit:', error);
    throw error;
  }
}; 