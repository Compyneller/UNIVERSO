import React from "react";
import style from "./Footer.module.scss";
import logo from "../../Assets/oie_hSmUWMk0obba.png";

const Footer = () => {
  return (
    <div className={style.FooterContainer}>
      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.Address}>
            <img src={logo} alt="" />
            <p>
              {" "}
              Address: Praceta Sebastião da Gama, nº 3, 3º ESQ, Massamá <br />
              District: Lisbon <br /> Municipality: Sintra <br /> Parish:
              Massamá and Monte Abraão 2745 837 Queluz
            </p>
          </div>
          <div className={style.email}>
            <p>
              Contact Us :{" "}
              <a href="mailto:hello@universomagnanimo.org">
                hello@universomagnanimo.org
              </a>
            </p>
            <div className={style.socials}>
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
    </div>
  );
};

export default Footer;
