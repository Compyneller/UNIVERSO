import React from "react";
import contact from "../Assets/Contact.jpg";
import style from "./Home.module.scss";
import logo from "../Assets/oie_hSmUWMk0obba.png";
const ContactUs = () => {
  return (
    <div className={style.MainContainer}>
      <div className={style.ImageDashBoard}>
        <img src={contact} alt="" />
        <h1>CONTACT US</h1>
      </div>

      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.Content}>
            <div className={style.contentContainer}>
              <h1>Address: Praceta Sebastião da Gama, nº 3, 3º ESQ, Massamá</h1>
              <h1>District: Lisbon</h1>
              <h1>Municipality: Sintra</h1>
              <h1>Parish: Massamá and Monte Abraão 2745 837 Queluz</h1>
            </div>
            <div className={style.socialsContainer}>
              <h1>
                Contact Email :{" "}
                <a href="mailto:hello@universomagnanimo.org">
                  hello@universomagnanimo.org
                </a>
              </h1>
              <div className={style.socials}>
                <div>
                  <h1>Visit us also at:</h1>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://universomagnanimounipessoal.medium.com/"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a target="_blank" href=" https://twitter.com/univmagnanimo">
                    <i className="fa-brands fa-medium"></i>
                  </a>
                  <a
                    href=" https://www.linkedin.com/company/universo-magnanimo"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={style.ImageContainer}>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
