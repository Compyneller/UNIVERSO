import React from "react";
import style from "./MV.module.scss";
import mission from "../../Assets/mission.jpg";
import vision from "../../Assets/vision.jpg";

const MV = () => {
  return (
    <div className={style.MainContainer}>
      <div className={style.container}>
        <div className={`${style.row} ${style.row2}`}>
          <div className={style.ImageContainer}>
            <img src={mission} alt="" />
          </div>
          <div className={style.contentContainer}>
            <h1>Mission</h1>
            <p>
              We target changing the digital experience of our clients into
              financially savvy, practical, client driven and imaginative
              specialized arrangements. Universo Magnnimo perceives and adjusts
              rapidly to the changing digital landscape along these lines
              engaging clients to inspire their presence on the lookout.
            </p>
          </div>
        </div>
        <div className={`${style.row} `}>
          <div className={style.contentContainer}>
            <h1>Vision</h1>
            <p>
              We envision turning into a worldwide leader in reevaluating and
              offshoring technological solutions. Our eye into the subtleties,
              quality confirmation and fastidious determination of ability will
              assist organizations with advancing into productive resources.
            </p>
          </div>
          <div className={style.ImageContainer}>
            <img src={vision} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MV;
