import React from "react";
import style from "./Values.module.scss";

import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Values = () => {
  const { allData } = useContext(Data);
  return (
    <div className={style.CreateContainer}>
      <h1>{allData?.data?.services?.heading}</h1>
      <div className={style.Container}>
        {allData?.data?.services?.content_boxes?.map((items, index) => {
          return (
            <div className={style.Cards} key={index}>
              <div className={style.ImageContainer}>
                <img src={items.icon} alt="" />
              </div>
              <div className={style.CardContent}>
                <h3>{items.headeing}</h3>
                <p>{items.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
