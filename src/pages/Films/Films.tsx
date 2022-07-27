import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmsCardsList from "../../components/FilmsCardsList";
import ShowMore from "../../components/ShowMore";
import { FilmSelectors, loadFilms, loadSearchFilms, setSearchFilms } from "../../redux/reducers/filmReducer";
import { FilterSelectors, setCurrentPage } from "../../redux/reducers/filterReducer";
import "./Films.css";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/98742-loading.json";

type FilmsProps = {
  pageName: string;
};

const Films: FC<FilmsProps> = ({ pageName }) => {
  const isLoading = useSelector(FilmSelectors.getFilmsLoading);
  const dispatch = useDispatch();
  const isHomePage = pageName === "Home";
  const order = isHomePage ? "budget:desc" : "popularity:desc";
  const searchValue = useSelector(FilterSelectors.getSearchValue);
  const genre = useSelector(FilterSelectors.getFilterGenres);
  const page = useSelector(FilterSelectors.getCurrentPage);
  const type = useSelector(FilterSelectors.getFilterSortTab);
  const country = useSelector(FilterSelectors.getFilterCountry);

  const filmsList = useSelector(searchValue.trim() ? FilmSelectors.getSearchFilms : FilmSelectors.getFilms);

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(
      loadFilms({
        isLoadMoreFilms: false,
        order,
        page: 1,
        type: type.toLowerCase(),
        genre,
        country,
      })
    );
  }, [pageName, type, country, genre]);

  useEffect(() => {
    searchValue.trim() ? dispatch(loadSearchFilms({ query: searchValue })) : dispatch(setSearchFilms([]));
  }, [searchValue]);

  const showMore = () => {
    dispatch(
      loadFilms({
        isLoadMoreFilms: true,
        order,
        page: page + 1,
        type: type.toLowerCase(),
        genre,
        country,
      })
    );
    dispatch(setCurrentPage(page + 1));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <main className="films">
      <div className="films__container">
        {isLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <>
            <FilmsCardsList filmsList={filmsList}></FilmsCardsList>
            {!searchValue.trim() && <ShowMore onClick={showMore}></ShowMore>}
          </>
        )}
      </div>
    </main>
  );
};

export default Films;
