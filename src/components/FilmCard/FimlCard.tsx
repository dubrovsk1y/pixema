import React, { FC } from "react";
import { FilmType } from "../../types";
import "./FilmCard.css";

type FilmProps = {
  data: FilmType;
};

const FilmCard: FC<FilmProps> = ({ data }) => {
  const { Title, Year, imdbID, Type, Poster } = data;

  return (
    <div className="film">
      <div className="film__image">
        <img src={Poster} alt={Title} />
      </div>
      <div className="film__info">
        <h3 className="film__info__title">{Title}</h3>
        <p className="film__info__type">{Type}</p>
      </div>
    </div>
  );
};

export default FilmCard;
