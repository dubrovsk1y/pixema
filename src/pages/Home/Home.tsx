import React, { useEffect } from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";
import FilmsCardsList from "../../components/FilmsCardsList";
import { FilmSelectors, loadFilmsData } from "../../redux/reducers/filmReducer";
import FiltersMenu from "../../components/FiltersMenu";
import { FilterSelectors } from "../../redux/reducers/filterReducer";
import classNames from "classnames";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmsData({}));
  }, []);

  const filmsList = useSelector(FilmSelectors.getFilmsList);
  const isFilterMenuOpen = useSelector(FilterSelectors.getFilterMenuStatus);

  return (
    <div className={classNames("home", { ["_lock"]: isFilterMenuOpen })}>
      <div className="home__container _container">
        <Sidebar></Sidebar>
        <div className="home__content">
          <HeaderPage></HeaderPage>
          <FilmsCardsList data={filmsList}></FilmsCardsList>
        </div>
      </div>
      <FiltersMenu></FiltersMenu>
    </div>
  );
};

export default Home;
