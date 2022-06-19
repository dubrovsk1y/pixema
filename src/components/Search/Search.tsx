import React from "react";
import "./Search.css";
import classNames from "classnames";

const Search = () => {
  return (
    <div className="search">
      <input className="search__input" placeholder="Search" type="text" />
      <div className="filter">
        <div className={classNames("filter__item1", { ["_active"]: true })}></div>
        <div className={classNames("filter__item2", { ["_active"]: true })}></div>
        <div className={classNames("filter__item3", { ["_active"]: true })}></div>
        <div className={classNames("filter__circle", { ["_active"]: true })}></div>
      </div>
    </div>
  );
};

export default Search;
