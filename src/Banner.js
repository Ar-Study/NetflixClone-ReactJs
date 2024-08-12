import React from "react";
import "./Banner.css";
function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          'url("https://th.bing.com/th/id/R.ceacc6ca55f33cbb5a58a483db13adc8?rik=yh%2foh%2fiZquoSqw&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fforum%2f220000%2f220276_1442818022945_full.png&ehk=4o7XqlcwGEH5E8iUeSutE5JXEay6qhRN9hYjfvLIzJw%3d&risl=&pid=ImgRaw&r=0")',
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__titles">Movie Name</h1>
        <div class="banner__buttons">
          <button class="banner__button">Play</button>
          <button class="banner__button">My List</button>
        </div>
        <h1 class="banner__discription">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis nam
          illo earum voluptatem aperiam, ratione modi cupiditate dolores
          corrupti esse ad excepturi vel, ex optio laborum dolore. Quam, facere
          sunt!
        </h1>
      </div>

      <div class="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
