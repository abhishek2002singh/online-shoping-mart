import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: "productComment",
  initialState: {
    comments: [], // Initial state for comments
    userComment : [],
  },
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload); // Add a new comment to the state
    },
    setUserComments: (state, action) => {
      state.userComment.push(action.payload); // Replace all comments with new data
    },
    clearComments: (state) => {
      state.userComment.pop() // Clear all comments
    },
  },
});

export const { addComment, setUserComments, clearComments } = commentSlice.actions;
export default commentSlice.reducer;
