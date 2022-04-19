import React from "react";
import style from "./NavBar.module.scss";
import logo from "../../Assets/oie_hSmUWMk0obba.png";

const NavBar = () => {
  return (
    <nav className={style.navBarContainer}>
      <div className={style.Container}>
        <img src={logo} alt="" />
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
    </nav>
  );
};

export default NavBar;
