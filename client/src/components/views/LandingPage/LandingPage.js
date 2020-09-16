import React, { useEffect, useState, useRef } from "react";
import Row from "../../commons/Row";
import Banner from "../../commons/Banner";
import { requests } from "../../Config";
//import { Row } from "semantic-ui-react";

function LandingPage() {
  const [MainMovieImage, setMainMovieImage] = useState(null);

  {
    /* <h2 className="display-5 mb-4">Welcome, {user.name}</h2> */
  }
  return (
    <div className="row">
      <div>
        {/* Nav */}
        <Banner />
        <Row
          className="row"
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row
          title="Popular TV Shows"
          fetchUrl={requests.fetchTopRatedTVShows}
        />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default LandingPage;
