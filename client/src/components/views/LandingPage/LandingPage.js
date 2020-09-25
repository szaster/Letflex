import React, { useEffect, useState } from "react";
// import React from "react";

import Row from "../../commons/Row";
import Banner from "../../commons/Banner";
import { requests } from "../../Config";
import MainNavbar from "../NavBar/MainNavbar";
//import { Row } from "semantic-ui-react";

function LandingPage() {
  return (
    <div className="">
      <MainNavbar />
      <div style={{ paddingBottom: "5rem", paddingTop: "3rem" }}>
        {/* Nav */}
        <Banner />
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchUpComing}
          isLargeRow
        />
        <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
        <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
        <Row title="POPULAR MOVIES" fetchUrl={requests.fetchPopularMovies} />
        <Row title="POPULAR TV SHOWS" fetchUrl={requests.fetchPopularTVShows} />
        <Row title="TV SHOWS" fetchUrl={requests.fetchTVShows} />
        <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
        <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </div>
  );
}

export default LandingPage;
