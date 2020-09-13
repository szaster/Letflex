import React, { useEffect, useState, useRef } from "react";
import './LandingPage.css';
import Row from '../../commons/Row'
import { Typography } from "antd";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  IMAGE_SIZE,
  POSTER_SIZE,
  requests,
} from "../../Config";
import MainImage from "./Sections/MainImage";
//import { Row } from "semantic-ui-react";

const { Title } = Typography;
function LandingPage() {



  const [MainMovieImage, setMainMovieImage] = useState(null);


  return (
    <div>
      <div style={{ width: "100%", margin: "0" }}>
        {MainMovieImage && (
          <MainImage
            image={`${IMAGE_BASE_URL}${IMAGE_SIZE}${MainMovieImage.backdrop_path}`}
            title={MainMovieImage.original_title}
            text={MainMovieImage.overview}
          />
        )}
        <div style={{ width: "85%", margin: "1rem auto", color: "white" }}>
          <Row
            className="row"
            title="NETFLIX ORIGINALS"
                      fetchUrl={requests.fetchNetflixOriginals}
                      isLargeRow
          />
          <Row
            className="row"
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
          />
          <Row
            className="row"
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
          />
          <Row
            className="row"
            title="Popular TV Shows"
            fetchUrl={requests.fetchTopRatedTVShows}
          />
          <Row
            className="row"
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
          />
          <Row
            className="row"
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies}
          />
          <Row
            className="row"
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies}
          />
          <Row
            className="row"
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies}
          />
          <Row
            className="row"
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
