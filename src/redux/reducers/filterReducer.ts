import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSortTabsEnum } from "../../enums/enums";

type FilterState = {
  filterMenuStatus: boolean;
  filterStatus: boolean;
  filterSortTab: string;
  filterMovieName: string;
  filterGenres: Array<string>;
  filterYears: {
    from: any;
    to: any;
  };
  filterRating: {
    from: any;
    to: any;
  };
  filterCountry: string;
};

const initialState: FilterState = {
  filterMenuStatus: false,
  filterStatus: false,
  filterSortTab: FilterSortTabsEnum.Ratings,
  filterMovieName: "",
  filterGenres: [],
  filterYears: {
    from: 0,
    to: 0,
  },
  filterRating: {
    from: 0,
    to: 0,
  },
  filterCountry: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterMenuStatus: (state: any, action: PayloadAction<boolean>) => {
      state.filterMenuStatus = action.payload;
    },
    setFilterSortTab: (state: any, action: PayloadAction<string>) => {
      state.filterSortTab = action.payload;
    },
    setFilterGenres: (state: any, action: PayloadAction<string>) => {
      state.filterGenres = action.payload;
    },
    setFilterCountry: (state: any, action: PayloadAction<string>) => {
      state.filterCountry = action.payload;
    },
    setFilterRatingFrom: (state: any, action: PayloadAction<any>) => {
      state.filterRating.from = action.payload;
    },
    setFilterRatingTo: (state: any, action: PayloadAction<any>) => {
      state.filterRating.to = action.payload;
    },
    setFilterYearsFrom: (state: any, action: PayloadAction<any>) => {
      state.filterYears.from = action.payload;
    },
    setFilterYearsTo: (state: any, action: PayloadAction<any>) => {
      state.filterYears.to = action.payload;
    },
    setFilterMovieName: (state: any, action: PayloadAction<string>) => {
      state.filterMovieName = action.payload;
    },
  },
});

export const {
  setFilterMenuStatus,
  setFilterSortTab,
  setFilterGenres,
  setFilterCountry,
  setFilterRatingFrom,
  setFilterRatingTo,
  setFilterYearsFrom,
  setFilterYearsTo,
  setFilterMovieName,
} = filterSlice.actions;

export default filterSlice.reducer;

export const FilterSelectors = {
  getFilterMenuStatus: (state: any) => state.filter.filterMenuStatus,
  getFilterSortTab: (state: any) => state.filter.filterSortTab,
  getFilterGenres: (state: any) => state.filter.filterGenres,
  getFilterCountry: (state: any) => state.filter.filterCountry,
  getFilterRating: (state: any) => state.filter.filterRating,
  getFilterYears: (state: any) => state.filter.filterYears,
  getFilterMovieName: (state: any) => state.filter.filterMovieName,
};
