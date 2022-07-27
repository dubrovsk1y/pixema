import React, { useEffect } from "react";
import "./Film.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FilmSelectors, loadSelectedFilm } from "../../redux/reducers/filmReducer";
import Lottie from "react-lottie";
import * as animationData from "../../lotties/98742-loading.json";

const Film = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadSelectedFilm({ id }));
  }, []);

  const isLoading = useSelector(FilmSelectors.getSelectedFilmLoading);
  const selectedFilm = useSelector(FilmSelectors.getSelectedFilm);

  const genres = selectedFilm?.genres.map((genre: any) => genre.display_name);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  console.log(selectedFilm);

  return (
    <main className="selectedFilm">
      <div className="selectedFilm__container">
        {isLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <>
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
                {selectedFilm?.rating && (
                  <div className="selectedFilm__info__labels__rating">{selectedFilm?.rating}</div>
                )}
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
          </>
        )}
      </div>
    </main>
  );
};

export default Film;
