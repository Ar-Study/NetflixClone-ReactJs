import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
          alt=""
          className="loginScreen__logo"
        />
        <button className="loginScreen__button">Sign In</button>
      </div>
      <div class="loginScreen__gradient"></div>

      <div class="loginScreen__body">
        <>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere, Cancel at any time</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div class="loginScreen__input"></div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
