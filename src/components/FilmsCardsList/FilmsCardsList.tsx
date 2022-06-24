import React from "react";
import { FilmType } from "../../types";
import FilmCard from "../FilmCard";
import "./FilmsCardsList.css";

const FilmsCardsList = ({ data }: any) => {
  return (
    <main className="films">
      <div className="films__container">
        {data.map((film: FilmType) => (
          <FilmCard key={film.imdbID} data={film}></FilmCard>
        ))}
      </div>
    </main>
  );
};

export default FilmsCardsList;
