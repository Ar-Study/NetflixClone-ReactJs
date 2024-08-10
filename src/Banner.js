import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: 'url("https://i.imgur.com/e1hLQ2m.png")',
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__titles">Movie Name</h1>
        <div class="banner__buttons">
          <button class="banner__button">Play</button>
          <button class="banner__button">My List</button>
        </div>
        <h1 class="banner__discription">This is a test</h1>
      </div>

      <div class="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
