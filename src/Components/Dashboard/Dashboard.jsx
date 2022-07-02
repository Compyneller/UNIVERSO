import React from "react";
import style from "./Dashboard.module.scss";
import video from "../../Assets/Untitled.mp4";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";
const Dashboard = () => {
  const { allData } = useContext(Data);

  return (
    <div className={style.DashboardContainer}>
      <video muted loop autoPlay src={video}></video>
      <div className={style.Container}>
        <h1>{allData?.data?.main_text}</h1>
        <p style={{ fontSize: "30px" }}>{allData?.data?.sub_text}</p>
      </div>
      <span
        className={style.mouse}
        onClick={() => {
          window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
        }}
      >
        <span className={style.mouseWheel}></span>
      </span>
    </div>
  );
};

export default Dashboard;
