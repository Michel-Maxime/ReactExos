import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
    movies: [],
  },
  reducers: {
    Toggle: (state, filmId) => {
      !state.ids.includes(filmId.payload)
        ? state.ids.push(filmId.payload)
        : (state.ids = state.ids.filter((id) => id !== filmId.payload));
    },
    AddFav: (state, movie) => {
      state.movies = movie.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Toggle, AddFav } = favoriteSlice.actions;

export default favoriteSlice.reducer;
