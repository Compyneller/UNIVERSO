import React from "react";
import style from "./Values.module.scss";
import build from "../../Assets/value21.svg";
import operate from "../../Assets/value31.svg";
import transfer from "../../Assets/value41.svg";
import transfer2 from "../../Assets/value51.svg";

const Values = () => {
  return (
    <div className={style.CreateContainer}>
      <h1>VALUES</h1>
      <div className={style.Container}>
        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={build} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>Transparency</h3>
            <p>
              We adhere to a rule of complete and 100% transparency in all our
              projects and activities and ensure that our client knows every
              detail of the project.
            </p>
          </div>
        </div>

        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={operate} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>Quality</h3>
            <p>
              We assure the best quality of work in all our genres of work with
              on-time delivery
            </p>
          </div>
        </div>
        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={transfer} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>Value for Money</h3>
            <p>
              We are not only the best in our industry in terms of quality work
              but we are value for money as well. Client will receive the best
              services at the best prices
            </p>
          </div>
        </div>
        <div className={style.Cards}>
          <div className={style.ImageContainer}>
            <img src={transfer2} alt="" />
          </div>
          <div className={style.CardContent}>
            <h3>Commitment</h3>
            <p>
              We are constantly committed towards our work and providing
              consistent delivery of results
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
