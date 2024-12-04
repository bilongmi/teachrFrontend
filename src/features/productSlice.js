import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts } from '../services/porduitsServices';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
      try {
        const data = await getProducts();
        return data;
      } catch (error) {
        return rejectWithValue(error.message); 
      }
    }
  );


const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [], 
    status: 'idle', 
    error: null, 
  },
  reducers: {
    
    addProduct: (state, action) => {
      state.list.push(action.payload); 
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; 
      });
  },
});

export const { setProducts, addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
