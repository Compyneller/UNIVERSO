import React from "react";
import About from "../Components/About/About";
import Create from "../Components/Create/Create";
import Dashboard from "../Components/Dashboard/Dashboard";
import Discover from "../Components/Discover/Discover";
import HighImpact from "../Components/HighImpact/HighImpact";
import style from "./Home.module.scss";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <About />
      <Discover />
      <Create />
      {/* <HighImpact /> */}
    </div>
  );
};

export default Home;
