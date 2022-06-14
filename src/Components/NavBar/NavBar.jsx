import React, { useState } from "react";
import style from "./NavBar.module.scss";
import logo from "../../Assets/oie_hSmUWMk0obba.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={style.navBarContainer}>
      <div className={style.Container}>
        <Link onClick={() => setToggle(false)} to="/">
          <img src={logo} alt="" />
        </Link>
        <div
          className={`${style.Links} ${
            toggle ? style.LinksActive : style.Link
          }`}
        >
          <Link
            to="/#aboutus"
            onClick={() => {
              window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
              setToggle(false);
            }}
          >
            About Us
          </Link>
          <Link onClick={() => setToggle(false)} to="/services">
            Services
          </Link>
          <Link onClick={() => setToggle(false)} to="/contact">
            Contact Us
          </Link>

          <a
            onClick={() => setToggle(false)}
            target="_blank"
            href="https://mobile.twitter.com/universomag_"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>

          <a
            onClick={() => setToggle(false)}
            target="_blank"
            href=" https://universomagnanimounipessoal.medium.com/"
          >
            <i className="fa-brands fa-medium"></i>
          </a>
          <a
            onClick={() => setToggle(false)}
            href=" https://www.linkedin.com/company/universo-magnanimo"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        {toggle ? (
          <i
            className="fa-solid fa-xmark"
            onClick={() => setToggle(!toggle)}
            id={style.hamburger}
          ></i>
        ) : (
          <i
            className="fa-solid fa-bars"
            onClick={() => setToggle(!toggle)}
            id={style.hamburger}
          ></i>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
