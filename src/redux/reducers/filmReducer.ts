import { createSlice } from "@reduxjs/toolkit";

type FilmState = {
  searchFilms: any;
  films: any;
  filmsLoading: boolean;
  selectedFilmLoading: boolean;
  selectedFilm: any;
  selectedFilmId: any;
  favoritesFilms: any;
};

const initialState: FilmState = {
  searchFilms: [],
  films: [],
  filmsLoading: false,
  selectedFilmLoading: false,
  selectedFilm: null,
  selectedFilmId: null,
  favoritesFilms: [],
};

const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setSelectedFilmLoading: (state: any, action: any) => {
      state.selectedFilmLoading = action.payload;
    },
    setFilmsLoading: (state: any, action: any) => {
      state.filmsLoading = action.payload;
    },
    setMoreFilms: (state: any, action: any) => {
      state.films = [...state.films, ...action.payload];
    },
    setFilms: (state: any, action: any) => {
      state.films = action.payload;
    },
    setSearchFilms: (state: any, action: any) => {
      state.searchFilms = action.payload;
    },
    setSelectedFilm: (state: any, action: any) => {
      state.selectedFilm = action.payload;
    },
    setSelectedFilmId: (state: any, action: any) => {
      state.selectedFilmId = action.payload;
    },
    loadSelectedFilm: (state: any, action: any) => {},
    loadFilms: (state: any, action: any) => {},
    loadSearchFilms: (state: any, action: any) => {},
  },
});

export const {
  setMoreFilms,
  setFilms,
  setSearchFilms,
  setSelectedFilm,
  loadFilms,
  loadSearchFilms,
  loadSelectedFilm,
  setSelectedFilmId,
  setFilmsLoading,
  setSelectedFilmLoading,
} = filmSlice.actions;

export default filmSlice.reducer;

export const FilmSelectors = {
  getSelectedFilmLoading: (state: any) => state.film.selectedFilmLoading,
  getFilmsLoading: (state: any) => state.film.filmsLoading,
  getFilms: (state: any) => state.film.films,
  getSearchFilms: (state: any) => state.film.searchFilms,
  getSelectedFilm: (state: any) => state.film.selectedFilm,
  getSelectedFilmId: (state: any) => state.film.selectedFilmId,
};
