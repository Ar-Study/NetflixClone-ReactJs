import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && " nav__black"}`}>
      <div class="nav__contents">
        <img
          onClick={() => history("/")}
          className="nav__logo"
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          alt=""
        />

        <img
          onClick={() => history("./profile")}
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
        />
      </div>
    </div>
  );
}

export default Nav;
