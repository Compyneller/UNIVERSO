import React from "react";
import Create from "../Components/Create/Create";
import Discover from "../Components/Discover/Discover";
import services from "../Assets/Services.jpg";
import style from "./Home.module.scss";

const OurServices = () => {
  return (
    <div>
      <div className={style.ImageDashBoard}>
        <img src={services} alt="" />
        <h1>OUR SERVICES</h1>
      </div>
      <Discover />
      <Create />
    </div>
  );
};

export default OurServices;
