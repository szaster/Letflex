import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import ReactStars from "react-rating-stars-component";

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

  return (
    <div>
      <h2 className="row">{title}</h2>
      <div className="row_posters">
        {/* several row_poster(s) */}
        {movies && movies.map((movie, index) => (
           <Link to={`/movie/${movie.id}`}>
          <img
            // giving each movie an IDs
            key={index}
            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
            src={`${base_url}${ movie.poster_path }`}
            alt={movie.name}
          />
          {movie.name}
          </Link>
          
        ))}
        
      </div>
    </div>
  );
}

export default Row;
