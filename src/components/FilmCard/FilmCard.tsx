import React, { FC } from "react";
import { FilmType } from "../../types";
import "./FilmCard.css";

type FilmProps = {
  data: FilmType;
};

const FilmCard: FC<FilmProps> = ({ data }) => {
  const { name, poster, is_series } = data;

  return (
    <div className="film">
      <div className="film__image">
        <img src={poster} alt={name} />
      </div>
      <div className="film__info">
        <h3 className="film__info__title">{name}</h3>
        <p className="film__info__type">{is_series ? "series" : "movie"}</p>
      </div>
    </div>
  );
};

export default FilmCard;
