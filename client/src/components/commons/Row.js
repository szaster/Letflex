import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import {
  API_KEY,
  API_URL,
} from "../Config";
//import { Grid, Image } from "semantic-ui-react";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies([...movies, ...request.data.results]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

const shoot = () =>{

}

  return (
    <div className="row">
      <h2 className="row">{title}</h2>

      <div className="row_posters">
        {/* several row_poster(s) */}
        {movies && movies.map((movie) => (
          <img onClick={shoot}
            // giving each movie an ID
            key={movie.id}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
