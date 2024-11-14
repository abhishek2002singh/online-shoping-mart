import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'cardSearch',
  initialState: {
    searchItems: [],          // Stores the products added to the cart
    searchResults: [],  // Stores the filtered search results
  },
  reducers: {
    addSearchItems: (state, action) => {
      state.items.push(action.payload);  // Add a product to the cart
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;  // Set the filtered search results
    },
    clearCard: (state) => {
      state.items = [];  // Clear the cart
    },
  },
});

export const { setSearchResults, addSearchItems, clearCard } = searchSlice.actions;
export default searchSlice.reducer;
