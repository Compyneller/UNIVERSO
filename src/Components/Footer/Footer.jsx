import React from "react";
import style from "./Footer.module.scss";
import logo from "../../Assets/oie_hSmUWMk0obba.png";
import { useContext } from "react";
import { Data } from "../../Context/DataContext";
const Footer = () => {
  const { allData } = useContext(Data);
  return (
    <div className={style.FooterContainer}>
      <div className={style.Container}>
        <div className={style.row}>
          <div className={style.Address}>
            <img src={logo} alt="" />
            <p>
              {" "}
              Address: {allData?.data?.footer?.Address} <br />
              District: {allData?.data?.footer?.District} <br /> Municipality:
              {allData?.data?.footer?.Municipality} <br /> Parish:{" "}
              {allData?.data?.footer?.Parish}
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
              <a target="_blank" href={allData?.data?.footer?.twitter}>
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a target="_blank" href={allData?.data?.footer?.medium}>
                <i className="fa-brands fa-medium"></i>
              </a>
              <a href={allData?.data?.footer?.linkedin} target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <p className={style.footerText}>
              {" "}
              {allData?.data?.footer?.copyright}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
