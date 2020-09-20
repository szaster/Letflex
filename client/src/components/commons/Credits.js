import React, { useState, useEffect } from "react";
import axios from '../axios';
import "./Row.css";
import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL
} from "../Config";
import { Card, Grid, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import ReactStars from "react-rating-stars-component";

const base_url = "https://image.tmdb.org/t/p/original/";
function Credits({ title, fetchUrl, isLargeRow }) {
  const [castes, setCastes] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads and dont run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //setCastes([...castes, ...request.data.results]);
      return request;
    }
    console.log(fetchData());
  }, [fetchUrl]);

  return (
    <div>
      <h2 className="row">{title}</h2>
      <div className="row_posters">
        {/* several row_poster(s) */}
        {castes && castes.map((cast, index) => (
           <Link to={`/cast/${cast.id}`}>
          <img
            // giving each cast an ID
            key={index}
            src={`${IMAGE_BASE_URL}${ cast.profile_path }`}
            alt={cast.name}
            
          />
          </Link>
          
        ))}
        
      </div>
    </div>
  );
}

export default Credits;
