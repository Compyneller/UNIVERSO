import React from "react";
import style from "./Discover.module.scss";
import image from "../../Assets/f00cec10-1f17-4e47-8aad-e76191d25a73 (1).jpg";
import image2 from "../../Assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";
import image3 from "../../Assets/ben-kolde-d6dxQwmxV2Q-unsplash.jpg";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";

const Discover = () => {
  const { services } = useContext(Data);
  return (
    <div className={style.DiscoverContainer}>
      <div className={style.Container}>
        <h1>{services?.data?.main_text}</h1>
        <p>{services?.data?.sub_text}</p>
        <div className={style.row}>
          {services?.data?.content_boxes?.map((items, index) => {
            return (
              <div className={style.Cards} key={index}>
                <div className={style.ImageContainer}>
                  <img src={items.image} alt="" />
                </div>
                <div className={style.CardContents}>
                  <h5>{items.heading}</h5>
                  <p>{items.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Discover;
