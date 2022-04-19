import React from "react";
import style from "./High.module.scss";
import icon from "../../Assets/icon1.svg";

const HighImpact = () => {
  return (
    <div className={style.highContainer}>
      <div className={style.Container}>
        <h1>High-Impact Technology at Scale</h1>
        <p>
          Affle's first patent on ‘Consumer Acceptable Advertising’ was filed in
          2005 in the US and it continues to drive our consumer led ad
          innovations. Affle's platforms continue to pass the most stringent
          industry accreditations and uphold the highest standards in ethical
          advertising.
        </p>

        <div className={style.row}>
          <div className={style.Cards}>
            <div className={style.CardIcon}>
              <img src={icon} alt="" />
            </div>
            <div className={style.CardContent}>
              <div className={style.ContentDiv}>
                <h1>20</h1>
                <h5>Total Patent</h5>
                <p>As of Sept 30, 2021</p>
              </div>
            </div>
          </div>
          <div className={style.Cards}>
            <div className={style.CardIcon}>
              <img src={icon} alt="" />
            </div>
            <div className={style.CardContent}>
              <div className={style.ContentDiv}>
                <h1>20</h1>
                <h5>Total Patent</h5>
                <p>As of Sept 30, 2021</p>
              </div>
            </div>
          </div>
          <div className={style.Cards}>
            <div className={style.CardIcon}>
              <img src={icon} alt="" />
            </div>
            <div className={style.CardContent}>
              <div className={style.ContentDiv}>
                <h1>20</h1>
                <h5>Total Patent</h5>
                <p>As of Sept 30, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighImpact;
