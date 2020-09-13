import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
// import {
//   IMAGE_BASE_URL,
//   POSTER_SIZE,
// } from "../Config";
//import { Grid, Image } from "semantic-ui-react";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row_poster(s) */}
        {movies.map((movie) => (
          <img
            // giving each movie an ID
            key={movie.id}
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
