import React from "react";
import style from "./MV.module.scss";
import mission from "../../Assets/mission.jpg";
import vision from "../../Assets/vision.jpg";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const MV = () => {
  const { allData } = useContext(Data);
  return (
    <div className={style.MainContainer}>
      <div className={style.container}>
        <div className={`${style.row} ${style.row2}`}>
          <div className={style.ImageContainer}>
            <img src={allData?.data?.mission?.image} alt="" />
          </div>
          <div className={style.contentContainer}>
            <h1 style={{ textTransform: "capitalize" }}>
              {allData?.data?.mission?.heading}
            </h1>
            <p>{allData?.data?.mission?.text}</p>
          </div>
        </div>
        <div className={`${style.row} `}>
          <div className={style.contentContainer}>
            <h1 style={{ textTransform: "capitalize" }}>
              {allData?.data?.vision?.heading}
            </h1>
            <p>{allData?.data?.vision?.text}</p>
          </div>
          <div className={style.ImageContainer}>
            <img src={allData?.data?.vision?.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MV;
