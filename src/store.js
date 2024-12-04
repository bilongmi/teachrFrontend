import { configureStore } from '@reduxjs/toolkit';

// Exemple de slice à importer
import productReducer from './features/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer, 
  },
});

export default store;
