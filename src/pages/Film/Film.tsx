import React, { useEffect } from "react";
import "./Film.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FilmSelectors, loadSelectedFilm } from "../../redux/reducers/filmReducer";

const Film = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadSelectedFilm({ id }));
  }, []);

  const selectedFilm = useSelector(FilmSelectors.getSelectedFilm);

  const genres = selectedFilm?.genres.map((genre: any) => genre.display_name);

  console.log(selectedFilm);
  console.log(genres);

  return (
    <main className="selectedFilm">
      <div className="selectedFilm__container">
        <div className="selectedFilm__card">
          <div className="selectedFilm__card__image">
            <img src={selectedFilm?.poster} alt="" />
          </div>
          <button>X</button>
          <button>Y</button>
        </div>
        <div className="selectedFilm__info">
          <div className="selectedFilm__info__genres">
            {genres?.map((genre: string, index: number) =>
              index === genres.length - 1 ? (
                <div className="selectedFilm__info__genre">{genre}</div>
              ) : (
                <>
                  <div className="selectedFilm__info__genre">{genre}</div>
                  <div className="selectedFilm__info__genre">&bull;</div>
                </>
              )
            )}
          </div>
          <div className="selectedFilm__info__name">{selectedFilm?.name}</div>
          <div className="selectedFilm__info__labels">
            <div className="selectedFilm__info__labels__rating">{selectedFilm?.rating}</div>
            <div className="selectedFilm__info__labels__runtime">{`${selectedFilm?.runtime} min`}</div>
          </div>
          <div className="selectedFilm__info__description">{selectedFilm?.description}</div>
          <div className="selectedFilm__info__detailed">
            <div className="selectedFilm__info__detailed__year">
              <div className=""></div>
            </div>
            <div className="selectedFilm__info__detailed__released"></div>
            <div className="selectedFilm__info__detailed__boxOffice"></div>
            <div className="selectedFilm__info__detailed__production"></div>
            <div className="selectedFilm__info__detailed__actors"></div>
            <div className="selectedFilm__info__detailed__director"></div>
            <div className="selectedFilm__info__detailed__writers"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Film;
