import React from "react";
import "./Home.css";
import HeaderPage from "../../components/HeaderPage";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container _container">
        <Sidebar></Sidebar>
        <div className="home__content">
          <HeaderPage></HeaderPage>
        </div>
      </div>
    </div>
  );
};

export default Home;
