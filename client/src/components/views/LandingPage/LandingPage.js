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
import GridCard from "../../commons/GridCards";
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
            style={{ color: "white" }}
          />

          <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        </div>
        {/* <div style={{ width: "85%", margin: "1rem auto" }}>
          <Title level={2} style={{ color: "white" }}>
            {" "}
            Netflix Original{" "}
          </Title>
          <hr />
          <Row gutter={[16, 16]}>
            {Movies &&
              Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  <GridCard
                    image={
                      movie.poster_path
                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </React.Fragment>
              ))}
          </Row> */}

          {/* {Loading && <div>Loading...</div>}

          <br /> */}
          {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>Load More</button>
                </div> */}
        </div>
      </div>
  );
}

export default LandingPage;
