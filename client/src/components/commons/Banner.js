import React, { useEffect, useState } from "react";
import axios from "../axios";
import { requests } from "../Config";
//import { Button, Segment } from "semantic-ui-react";
import "./Banner.css";
import { Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

function Banner() {
  const [trailerUrl, setTrailerUrl] = useState('');
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
  const opts = {
	  height: '500',
	  width: '800',
	  playerVars: {
		  autoplay: 1,
	  },
  };
  const handleClick = (Movie) => {
	if (trailerUrl) {
	setTrailerUrl('');
	} else {
	movieTrailer(Movie?.title || Movie?.name || Movie?.original_name)
	.then(url => {
	const urlParams = new URLSearchParams(new URL(url).search);
	setTrailerUrl(urlParams.get('v'));
	})
	.catch((error) => console.log(error));
	}
  }
  
  const [open, setOpen] = React.useState(false);

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
            <Link>
              <button className="banner_button">Play</button>
            </Link>
            <Link>
              <Modal
                basic
                closeIcon
                centered
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                  <button
                    className="banner_button"
                    onClick={() => handleClick(movie)}
                  >
                    Watch Trailer
                  </button>
                }
                style={{ width: "55%" }}
              >
                <Header style={{ justifyContent: "center" }}>
                  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                </Header>
              </Modal>
            </Link>
          </div>
        <h1 style={{color: "white"}} className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className='banner-fadeBottom' />
      
    </header>
  );
}

export default Banner;
