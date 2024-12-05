import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategories, addCategory, updateCategory, deleteCategory } from '../services/categoriesService';


export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCategories();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (name, { rejectWithValue }) => {
    try {
      const data = await addCategory(name);
      console.log(data)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const modifyCategory = createAsyncThunk(
  'categories/modifyCategory',
  async (category, { rejectWithValue }) => {
    const {id, name} = category
    console.log(id, name);
    
    try {
      const data = await updateCategory(id, name);
      console.log(data)
      return { id, ...data };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const removeCategory = createAsyncThunk(
  'categories/removeCategory',
  async (id, { rejectWithValue }) => {
    try {
      await deleteCategory(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })

      
      .addCase(createCategory.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      
      .addCase(modifyCategory.fulfilled, (state, action) => {
        const index = state.list.findIndex((category) => category.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })

      
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.list = state.list.filter((category) => category.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
