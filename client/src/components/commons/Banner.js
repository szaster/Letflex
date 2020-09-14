import React, { useEffect, useState } from "react";
import axios from "../axios";
import { requests } from "../../components/Config";
import { Button } from "semantic-ui-react";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // pick random movie for
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.lenth - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmbd.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <Button className="banner_button">Play</Button>
          <Button className="banner_button">My List</Button>
        </div>
        <h1 className="banner_description">{movie?.overview}</h1>
      </div>
    </header>
  );
}

export default Banner;
