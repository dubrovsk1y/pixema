import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilmSelectors, loadFilmsData } from "../../redux/reducers/filmReducer";
import { FilmType } from "../../types";
import FilmCard from "../FilmCard";
import "./FilmsCardsList.css";

type FilmsCardsListProps = {
  page: string;
};

const FilmsCardsList: FC<FilmsCardsListProps> = ({ page }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilmsData({}));
  }, []);

  const filmsList = useSelector(FilmSelectors.getFilmsList);

  return (
    <main className="films">
      <div className="films__container">
        {filmsList.map((film: FilmType) => (
          <FilmCard key={film.imdbID} data={film}></FilmCard>
        ))}
      </div>
    </main>
  );
};

export default FilmsCardsList;
