import React from "react";
import style from "./Create.module.scss";
import build from "../../Assets/build1.svg";
import operate from "../../Assets/operate1.svg";
import transfer from "../../Assets/tranfer1.svg";

const Create = () => {
  return (
    <div className={style.CreateContainer}>
      <div className={style.Container}>
        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={build} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>DEVELOP</h3>
            <h5>We help you establish a team of skilled people.</h5>
            <p>
              We analyze the skill requirement for your product and efficiently
              build a team of qualified people. With us, you can quickly launch
              your desired product team.
            </p>
          </div>
        </div>

        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={operate} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>OPERATE</h3>
            <h5>We perform full-service operations.</h5>
            <p>
              We handle the IT operations with full efficiency so that you can
              focus on your product & business. We provide all the facilities
              that will help you in achieving your goal.
            </p>
          </div>
        </div>
        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={transfer} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>TRANSFER</h3>
            <h5>Take full charge to get started with your team.</h5>
            <p>
              We transfer you with an entire team at a fixed cost so that you
              can establish an entity. We never compromise in providing you
              exceptional services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
