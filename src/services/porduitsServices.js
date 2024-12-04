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
