import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    add: (state, movie) => {
      state.movies = movie.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = moviesSlice.actions;

export default moviesSlice.reducer;
