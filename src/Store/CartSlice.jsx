import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name,image,cost}=action.payload
      const existitem=state.items.find((item) =>{item.name===name})
      if(existitem){
        item.quantity++;
      }
      else{
        state.items.push({name,image,cost,quantity:1})
      }
    },
    removeItem: (state, action) => {
      state.items=state.items.filter((ele)=> ele.name!==action.payload)
    },
    updateQuantity: (state, action) => {
    
      let item = state.items.find(ele=>ele.name===action.payload.item.name)
     
        if(action.payload.type==='de'){
          item.quantity--;
         
        }
        else{
          item.quantity++;
        }
        
      
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
