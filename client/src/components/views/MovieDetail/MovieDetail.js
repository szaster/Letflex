import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "../../commons/Row";
import "../../commons/Row.css";
import { API_URL, API_KEY, requests, fetchCasts } from "../../Config";
import MovieInfo from "./Sections/MovieInfo";
import MainNavbar from "../NavBar/MainNavbar";
import { Grid, Modal, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import MovieComments from "../MovieComments";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieDetailPage(props, c) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Casts, setCasts] = useState([]);
  const [CommentLists, setCommentLists] = useState([]);
  const [LoadingForMovie, setLoadingForMovie] = useState(true);
  const movieVariable = {
    movieId: movieId,
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setCasts(await fetchCasts(movieId));
    };

    fetchAPI();
  }, [movieId]);

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

  useEffect(() => {
    let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    fetchDetailInfo(endpointForMovieInfo);
  }, []);

  const fetchDetailInfo = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        setMovie(result);
        setLoadingForMovie(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  const opts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(Movie?.title || Movie?.name || Movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const [open, setOpen] = React.useState(false);

  function refreshPage() {
    window.parent.location = window.parent.location.href;
  }
  return (
    <div style={{ paddingTop: "4rem" }}>
      <MainNavbar />
      {/* Header */}
      <header
        className="banner"
        style={{
          color: "white",
          backgroundSize: "cover",
          backgroundImage: `url("${base_url}${Movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {Movie?.title || Movie?.name || Movie?.original_name}
          </h1>
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
                    onClick={() => handleClick(Movie)}
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
          <h1 style={{ color: "white" }} className="banner_descriptionD">
            {Movie?.overview}
          </h1>
        </div>
        <div className="banner-fadeBottom" />
      </header>
      {/* Body */}
      <div style={{ margin: "1rem auto", marginRight: "3rem" }}>
        <Grid divided="vertically" stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              {/* Movie Info */}
              {!LoadingForMovie ? (
                <MovieInfo movie={Movie} />
              ) : (
                <div>loading...</div>
              )}
            </Grid.Column>
            <Grid.Column>
              {/* Comments */}
              <MovieComments movieId={movieId} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/* 
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LikeDislikes
            video
            videoId={movieId}
            userId={localStorage.getItem("userId")}
          />
        </div> */}
      </div>
      <div>
        <h2 className="row">Casts</h2>
        <div className="row_posters">
          {Casts.map((c, i) => (
            <div className="col-md-2 text-center" key={i}>
              <Link exact to={`/credits/${c.id}`}>
                <img
                  className="img-fluid rounded-circle mx-auto d-block"
                  src={c.img}
                  alt="cast image"
                />

                <p className="font  -weight-bold text-center">{c.name}</p>
                <p
                  className="font-weight-light text-center"
                  style={{ color: "#fff" }}
                >
                  {`Character: ${c.character}`}
                </p>
              </Link>
            </div>
          ))}
          ;
        </div>
      </div>

      <Link
        fetchUrl={`https://image.tmdb.org/t/p/w200${c}profile_path`}
        onClick={() => refreshPage()}
      >
        <Row
          title="SIMILAR MOVIES"
          fetchUrl={`/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`}
        />
      </Link>
    </div>
  );
}

export default MovieDetailPage;
