import React from "react";
import style from "./Discover.module.scss";
import image from "../../Assets/f00cec10-1f17-4e47-8aad-e76191d25a73 (1).jpg";
import image2 from "../../Assets/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg";
import image3 from "../../Assets/ben-kolde-d6dxQwmxV2Q-unsplash.jpg";

const Discover = () => {
  return (
    <div className={style.DiscoverContainer}>
      <div className={style.Container}>
        <h1>
          Customer Algorithms assists us to convert Ads into Recommendations for
          Generating Revenue
        </h1>
        <p>
          Analyze and identify your particular set of customers and then acquire
          and re-engage them through our platform. We provide you with unique
          services that let you connect with potential customers, our
          high-quality understanding & customer insights transform
          advertisements into exceptional customer recommendations that help us
          to deliver user engagement and generate revenue for your business.
        </p>
        <div className={style.row}>
          <div className={style.Cards}>
            <div className={style.ImageContainer}>
              <img src={image2} alt="" />
            </div>
            <div className={style.CardContents}>
              <h5>Analyze & Identify</h5>
              <p>
                We only recommend highly relevant analysis that helps to target
                particular and potential customers. We acknowledge the
                understanding of our customers and it assists us to provide you
                better insights to connect with them easily.
              </p>
            </div>
          </div>
          <div className={style.Cards}>
            <div className={style.ImageContainer}>
              <img src={image} alt="" />
            </div>
            <div className={style.CardContents}>
              <h5>Obtain & Engage</h5>
              <p>
                We provide customer acquisition solutions that help brands,
                businesses & apps build a community of potential customers. Our
                platform runs on high-quality technology that performs
                advertising with clarity, control & competence.
              </p>
            </div>
          </div>
          <div className={style.Cards}>
            <div className={style.ImageContainer}>
              <img src={image3} alt="" />
            </div>
            <div className={style.CardContents}>
              <h5>Conduct & Re-engage</h5>
              <p>
                Conduct campaigns and utilize its power to reach customers
                through ads, social media & owned media. Make a stronger
                connection with your customers when you engage or re-engage with
                them on their choices & preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
