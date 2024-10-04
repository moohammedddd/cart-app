import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const featch_data = createAsyncThunk(
    "products/featch_data",
    async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
    }
)

const product_slice = createSlice(
    {
        name:"products",
        initialState:{
            products:[],
            loading:false,
            error:null,
        },

        reducers: {},
        extraReducers: (builder) => {
         builder
      .addCase(featch_data.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(featch_data.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(featch_data.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },



    }
) 
export default product_slice.reducer;