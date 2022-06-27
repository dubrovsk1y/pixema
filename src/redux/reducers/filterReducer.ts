import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSortTabsEnum } from "../../enums/enums";

type FilterState = {
  filterMenuStatus: boolean;
  filterStatus: boolean;
  filterSortTab: string;
  filterGenres: Array<string>;
  filterCountry: string;
};

const initialState: FilterState = {
  filterMenuStatus: false,
  filterStatus: false,
  filterSortTab: FilterSortTabsEnum.Ratings,
  filterGenres: [],
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
  },
});

export const { setFilterMenuStatus, setFilterSortTab, setFilterGenres, setFilterCountry } = filterSlice.actions;

export default filterSlice.reducer;

export const FilterSelectors = {
  getFilterMenuStatus: (state: any) => state.filter.filterMenuStatus,
  getFilterSortTab: (state: any) => state.filter.filterSortTab,
  getFilterGenres: (state: any) => state.filter.filterGenres,
  getFilterCountry: (state: any) => state.filter.filterCountry,
};
