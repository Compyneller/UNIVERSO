import React from "react";
import style from "./Create.module.scss";
import build from "../../Assets/build1.svg";
import operate from "../../Assets/operate1.svg";
import transfer from "../../Assets/tranfer1.svg";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Create = () => {
  const { services } = useContext(Data);
  return (
    <div className={style.CreateContainer}>
      <div className={style.Container}>
        {services?.data?.box_container.map((items, index) => {
          return (
            <div className={style.Cards} key={index}>
              <div className={style.ImageContainer}>
                <img src={items.background_image} alt="" />
              </div>
              <div className={style.CardContent}>
                <h3>{items.heading}</h3>
                <h5>{items.main_text}</h5>
                <p>{items.sub_text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Create;
