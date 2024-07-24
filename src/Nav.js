import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="nav nav__black">
      <div class="nav__contents">
        <img
          className="nav__logo"
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          alt=""
        />

        <img
          className="nav__avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
        />
      </div>
    </div>
  );
}

export default Nav;
