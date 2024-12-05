import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, deleteProduct as deleteProductAPI, addProduct, updateProduct } from '../services/porduitsServices';


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

 

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      await deleteProductAPI(id); 
      return id; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (product, { rejectWithValue }) => {
      try {
        const data = await addProduct(product);
        console.log(data)
        return data; 
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const setProducts = createAsyncThunk(
    'products/setProducts',
    async (products, { rejectWithValue }) => {

        return products ; 
    }

  );

  export const modifyProduct = createAsyncThunk(
    'products/modifyProduct',
    async ({ id, updatedProduct }, { rejectWithValue }) => {
      try {
        const data = await updateProduct(id, updatedProduct);
        return { id, ...data }; 
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
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = state.list.filter((product) => product.id !== action.payload); 
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload; 
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.list.push(action.payload); // Ajoute le produit à la liste
      })
      .addCase(setProducts.fulfilled, (state, action) =>{
       state.list = action.payload
      })
      .addCase(modifyProduct.fulfilled, (state, action) => {
        const index = state.list.findIndex((product) => product.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload; // Met à jour le produit
        }
      });
  
  },
});

export const { removeProduct } = productSlice.actions;
export default productSlice.reducer;
