import React from "react";
import "./HeaderPage.css";
import Search from "../Search";
import User from "../User";

const HeaderPage = () => {
  return (
    <header className="header">
      <Search></Search>
      <User></User>
    </header>
  );
};

export default HeaderPage;
