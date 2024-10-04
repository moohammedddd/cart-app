import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from "./Product-Slice";
import cartSlice  from './Cart_Slice';



const rootReducer = {
    product:ProductSlice,
    cart:cartSlice
    

  };
  
  export const store = configureStore({
    reducer: rootReducer // مرر الكائن هنا
  });
  