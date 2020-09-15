import React, { useEffect, useState } from "react";
import axios from "../axios";
import { requests } from "../Config";
//import { Button, Segment } from "semantic-ui-react";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // pick random movie for
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      //return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }
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
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 style={{color: "white"}} className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner-fadeBottom' />
      
    </header>
  );
}

export default Banner;
