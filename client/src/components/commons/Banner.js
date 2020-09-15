import React, { useEffect, useState } from "react";
import axios from "../axios";
import { requests } from "../Config";
import { Button } from "semantic-ui-react";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // pick random movie for
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      //return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        color: 'white',
        backgroundSize: "cover",
        backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 style={{color: "white",}}>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <Button className="banner_button">Play</Button>
          <Button className="banner_button">My List</Button>
        </div>
        <h1 style={{color: "white"}} className="banner_description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
