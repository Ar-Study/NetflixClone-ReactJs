import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Requests";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div class="banner__contents">
        <h1 class="banner__titles">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <div class="banner__buttons">
          <button class="banner__button">Play</button>
          <button class="banner__button">My List</button>
        </div>
        <h1 class="banner__discription">
          {truncate(`${movie.overview}`, 150)}
        </h1>
      </div>

      <div class="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
