import React from "react";
import About from "../Components/About/About";
import Dashboard from "../Components/Dashboard/Dashboard";
import MV from "../Components/MissionVission/MV";
import Values from "../Components/Values/Values";
// import HighImpact from "../Components/HighImpact/HighImpact";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Dashboard />
      <div id="aboutus">
        <About />
        <MV />
        <Values />
      </div>

      {/* <HighImpact /> */}
    </>
  );
};

export default Home;
