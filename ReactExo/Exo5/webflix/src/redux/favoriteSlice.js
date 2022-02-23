import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    Toggle: (state, filmId) => {
      !state.ids.includes(filmId.payload)
        ? state.ids.push(filmId.payload)
        : (state.ids = state.ids.filter((id) => id !== filmId.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { Toggle } = favoriteSlice.actions;

export default favoriteSlice.reducer;
