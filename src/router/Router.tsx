import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import FilmsCardsList from "../components/FilmsCardsList";
import PagesWrapper from "../components/PagesWrapper";
import { PathEnum } from "../enums/enums";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesWrapper></PagesWrapper>}>
          <Route path={PathEnum.Home} element={<FilmsCardsList page={"Home"}></FilmsCardsList>}></Route>
          <Route path={PathEnum.Trends} element={<FilmsCardsList page={"Trends"}></FilmsCardsList>}></Route>
          <Route path={PathEnum.Favorites} element={<FilmsCardsList page={"Favorites"}></FilmsCardsList>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
