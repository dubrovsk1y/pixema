import React from "react";
import "./Search.css";
import FilterSvg from "../../icons/FilterSvg";

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" placeholder="Search" type="text" />
      <FilterSvg></FilterSvg>
    </div>
  );
};

export default Search;
