import { createSlice } from "@reduxjs/toolkit";

type FilmState = {
  filmsList: any;
};

const initialState: FilmState = {
  filmsList: [],
};

const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilmsList: (state: any, action: any) => {
      state.filmsList = action.payload;
    },
    loadFilmsData: (state: any, action: any) => {},
  },
});

export const { setFilmsList, loadFilmsData } = filmSlice.actions;

export default filmSlice.reducer;

export const FilmSelectors = {
  getFilmsList: (state: any) => state.film.filmsList,
};
