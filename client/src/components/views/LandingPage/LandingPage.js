import React, { useEffect, useState, useRef } from "react";
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
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
          />
          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
          <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
          <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
