import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    initialize: (state,action) => {
      state = {
        ...action.payload,
      }
    },
    deleteProduct: (state,action) => {
      const deleteProducts = state.products.filter((product) => product._id === action.payload._id);
      const restProducts = deleteProducts.filter((item,index) => index!==0);
      const Products = state.products.filter((product) => product._id !== action.payload._id);
      
      state.products = [...Products,...restProducts];
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity; 
    }
  },
});

export const { addProduct, reset, initialize ,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;
