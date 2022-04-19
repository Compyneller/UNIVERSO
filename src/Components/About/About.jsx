import React from "react";
import style from "./About.module.scss";
import about from "../../Assets/jason-goodman-bzqU01v-G54-unsplash.jpg";

const About = () => {
  return (
    <div className={style.AboutContainer}>
      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.content}>
            <h1>About Us</h1>
            <p>
              UNIVERSO MAGNÂNIMO, UNIPESSOAL LDA is a developing & leading
              software development company known for its highly effective &
              innovative digital solutions that helps in evolving a brand,
              business or application. We provide you exceptional insight of
              your customers that helps you to expand your web & mobile
              application customer base. Our highly-qualified & skilled team
              makes sure to properly analyze & implement techniques that help
              you to generate revenue & build a strong community of customers
              with potential engagement. <br />
              <br />
              We have entered with a vision to become a top-leading company that
              provides technical solutions with quality assurance & meticulous
              selection of talents that will help business to evolve profitable
              assets. <br />
              <br />
              We are on a mission to transform the understanding & experience of
              the customers into cost effective, functional, user-centric and
              innovative technical solutions. We believe in empowering clients
              to uplift their presence in the market.
            </p>
          </div>
          <div className={style.imageContainer}>
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
