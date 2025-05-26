import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (!exists) state.items.push({ ...item, quantity: 1 });
    },
    incrementQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    }
  }
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;