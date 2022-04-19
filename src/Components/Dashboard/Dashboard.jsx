import React from "react";
import style from "./Dashboard.module.scss";
import video from "../../Assets/Untitled.mp4";

const Dashboard = () => {
  return (
    <div className={style.DashboardContainer}>
      <video muted loop autoPlay src={video}></video>
      <div className={style.Container}>
        <h1>
          Accelerate the growth of the consumers’ community with a functional
          network on your system.
        </h1>
        <p style={{ fontSize: "30px" }}>
          Build a relationship with customers and establish real connections to
          operate acquisition, engagement, and conversions. Discover the
          potential customers for your app & business.
        </p>
      </div>
      <span
        className={style.mouse}
        onClick={() => {
          window.scroll(0, 1080);
        }}
      >
        <span className={style.mouseWheel}></span>
      </span>
    </div>
  );
};

export default Dashboard;
