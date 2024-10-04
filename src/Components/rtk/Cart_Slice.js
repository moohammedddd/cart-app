import {  createSlice } from "@reduxjs/toolkit";


 export const cartSlice = createSlice({
    name:"cartSlice",
    initialState:[],
    reducers:{
        addToCart:(state, action) =>{
        const checkIncart = state.find(item => item.id === action.payload.id)  
        if(checkIncart) {
            checkIncart.quantity += 1;
        }
        else{
            state.push({...action.payload,quantity:1})
        }

    
        },
        deleteFromCart:(state, action)=>{
            return state.filter(product => product.id !== action.payload); 

        },
        clear:(state,action) =>{
            return [];
        },
        updateQuantity:(state,action) =>{
            const checkIQuntiy = state.find(item => item.id  === action.payload.id)
            if (checkIQuntiy){
              checkIQuntiy.quantity = action.payload.quantity
            }
        }
    }
})
export const {addToCart,deleteFromCart,clear,updateQuantity} = cartSlice.actions;
export default cartSlice.reducer;