import React, { FC } from "react";
import "./CustomSelect.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { FilterSelectors, setFilterCountry, setFilterGenres } from "../../redux/reducers/filterReducer";

const genres = [
  {
    value: "adventure",
    label: "Adventure",
  },
  {
    value: "dramma",
    label: "Dramma",
  },
  {
    value: "documental",
    label: "Documental",
  },
  {
    value: "thriller",
    label: "Thriller",
  },
];

const countries = [
  {
    value: "germany",
    label: "Germany",
  },
  {
    value: "ukrain",
    label: "Ukrain",
  },
  {
    value: "poland",
    label: "Poland",
  },
  {
    value: "japan",
    label: "Japan",
  },
  {
    value: "belarus",
    label: "Belarus",
  },
];

type CustomSelectProps = {
  isMulti: boolean;
  id?: string;
};

const CustomSelect: FC<CustomSelectProps> = ({ isMulti, id }) => {
  const dispatch = useDispatch();

  const currentCountry = useSelector(FilterSelectors.getFilterCountry);
  const currentGenres = useSelector(FilterSelectors.getFilterGenres);

  const getValue = () => {
    if (isMulti) {
      return currentGenres ? genres.filter((item) => currentGenres.indexOf(item.value) >= 0) : [];
    } else {
      return currentCountry ? countries.find((item) => item.value === currentCountry) : "";
    }
  };

  const onChange = (newValue: any) => {
    dispatch(isMulti ? setFilterGenres(newValue.map((item: any) => item.value)) : setFilterCountry(newValue.value));
  };

  return (
    <Select
      isClearable={isMulti ? false : true}
      id={id}
      classNamePrefix={"customSelect"}
      placeholder={isMulti ? "Select genres" : "Select country"}
      options={isMulti ? genres : countries}
      isMulti={isMulti}
      onChange={onChange}
      value={getValue()}
    ></Select>
  );
};

export default CustomSelect;
