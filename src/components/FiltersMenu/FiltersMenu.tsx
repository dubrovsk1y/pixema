import React from "react";
import "./FiltersMenu.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ButtonEnum } from "../../enums/enums";
import {
  FilterSelectors,
  setFilterMenuStatus,
  setFilterMovieName,
  setFilterRatingFrom,
  setFilterRatingTo,
  setFilterYearsFrom,
  setFilterYearsTo,
} from "../../redux/reducers/filterReducer";
import Button from "../Button";
import CustomSelect from "../CustomSelect";
import Input from "../Input";
import SortTabs from "../SortTabs";
import CanelSvg from "../../icons/CancelSvg";

const FiltersMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(FilterSelectors.getFilterMenuStatus);

  const closeMenu = (event: any) => {
    if (event.target.classList.contains("filtersMenu__body")) {
      dispatch(setFilterMenuStatus(false));
      document.body.classList.remove("_lock");
    }
  };

  const clearFilter = () => {
    // code
  };

  const showResults = () => {
    // code
  };

  const onChangeInput = (event: any) => {
    switch (event.target.id) {
      case "movieName":
        dispatch(setFilterMovieName(event.target.value));
        break;
      case "yearsFrom":
        dispatch(setFilterYearsFrom(event.target.value));
        break;
      case "yearsTo":
        dispatch(setFilterYearsTo(event.target.value));
        break;
      case "ratingFrom":
        dispatch(setFilterRatingFrom(event.target.value));
        break;
      case "ratingTo":
        dispatch(setFilterRatingTo(event.target.value));
        break;
      default:
        break;
    }
  };

  return (
    <div onClick={closeMenu} className={classNames("filtersMenu__body", { ["_active"]: isMenuOpen })}>
      <div className="filtersMenu__content">
        <div className="filtersMenu__content__header">
          <span>Filters</span>
          <CanelSvg></CanelSvg>
        </div>
        <div className="sortBy">
          <span>Sort by</span>
          <SortTabs></SortTabs>
        </div>

        <div className="movieName">
          <label htmlFor="movieName">Full or short movie name</label>
          <Input
            onChange={onChangeInput}
            className={classNames("default-input")}
            id="movieName"
            placeholder="Your text"
          ></Input>
        </div>

        <div className="genre">
          <label htmlFor="genre">Genre</label>
          <CustomSelect id="genre" isMulti={true}></CustomSelect>
        </div>

        <div className="years">
          <label htmlFor="years">Years</label>
          <div className="years__inputs">
            <Input
              className={classNames("default-input")}
              onChange={onChangeInput}
              id="yearsFrom"
              placeholder="From"
            ></Input>
            <Input
              onChange={onChangeInput}
              id="yearsTo"
              className={classNames("default-input")}
              placeholder="To"
            ></Input>
          </div>
        </div>

        <div className="rating">
          <label htmlFor="rating">Rating</label>
          <div className="rating__inputs">
            <Input
              className={classNames("default-input", { ["_error"]: false })}
              onChange={onChangeInput}
              id="ratingFrom"
              placeholder="From"
            ></Input>
            <Input
              className={classNames("default-input")}
              onChange={onChangeInput}
              id={"ratingTo"}
              placeholder="To"
            ></Input>
          </div>
        </div>

        <div className="country">
          <label htmlFor="country">Country</label>
          <CustomSelect id="country" isMulti={false}></CustomSelect>
        </div>

        <div className="filtersMenu__content__footer">
          <Button onClick={clearFilter} text={ButtonEnum.Clear} className={classNames("secondary")}></Button>
          <Button onClick={showResults} text={ButtonEnum.Show} className={classNames("primary")}></Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
