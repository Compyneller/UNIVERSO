import React from "react";
import style from "./About.module.scss";
import about from "../../Assets/jason-goodman-bzqU01v-G54-unsplash.jpg";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const About = () => {
  const { allData } = useContext(Data);
  return (
    <div className={style.AboutContainer}>
      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.content}>
            <h1>{allData?.data?.about?.heading}</h1>
            <p>{allData?.data?.about?.text}</p>
          </div>
          <div className={style.ImageContainer}>
            <img src={allData?.data?.about?.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
