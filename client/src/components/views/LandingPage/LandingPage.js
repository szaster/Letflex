import React, { useEffect, useState, useRef } from "react";
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
import { Row } from "semantic-ui-react";

const { Title } = Typography;
function LandingPage() {
  const buttonRef = useRef(null);

  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    //const endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&`;
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&`;
    //https://api.themoviedb.org/3/movie/latest?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US

    fetchMovies(endpoint);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        // console.log(result)
        // console.log('Movies',...Movies)
        // console.log('result',...result.results)
        setMovies([...Movies, ...result.results]);
        setMainMovieImage(MainMovieImage || result.results[0]);
        setCurrentPage(result.page);
      }, setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  // const loadMoreItems = () => {
  //     let endpoint = '';
  //     setLoading(true)
  //     console.log('CurrentPage', CurrentPage)
  //     endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${CurrentPage + 1}`;
  //     fetchMovies(endpoint);

  // }

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 1) {
      // loadMoreItems()
      console.log("clicked");
      buttonRef.current.click();
    }
  };

  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <h1>Hello</h1>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />


    </div>
  );
}

export default LandingPage;
