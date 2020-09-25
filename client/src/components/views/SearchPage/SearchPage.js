import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Card, Divider, Header } from "semantic-ui-react";
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from "../../Config";
import MainNavbar from "../NavBar/MainNavbar";

function SearchPage() {
  const buttonRef = useRef(null);
  const location = useLocation();
  let q = new URLSearchParams(location.search).get("q");
  const [Query, setQuery] = useState(q);
  const [Movies, setMovies] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);

  if (Query !== q) {
    setQuery(q);
    setMovies([]);
    setCurrentPage(0);
  }

  useEffect(() => {
    const endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${Query}`;
    fetchMovies(endpoint);
  }, [Query]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanupListener() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchMovies = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        setMovies([...Movies, ...result.results]);
        setCurrentPage(result.page);
      }, setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endpoint = "";
    setLoading(true);
    console.log("CurrentPage", CurrentPage);
    endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }&query=${Query}`;
    fetchMovies(endpoint);
  };

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
      console.log("clicked");
      buttonRef.current.click();
    }
  };

  return (
    <div style={{ margin: "7rem" }}>
      <MainNavbar />

      <Header size="huge" style={{ color: "white" }}>
        {" "}
        Results for "{Query}"
      </Header>
      <Divider />
      <Card.Group columns={4} stackable centered>
        {Movies &&
          Movies.map((movie, index) => (
            <React.Fragment key={index}>
              <Card
                style={{
                  backgroundColor: "black",
                  margin: "1rem",
                }}
                image={
                  movie.poster_path ? (
                    `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  ) : (
                    <img src="https://via.placeholder.com/450" />
                  )
                }
                movieId={movie.id}
                movieName={movie.original_title}
              />
            </React.Fragment>
          ))}
      </Card.Group>

      {Loading && <div>Loading...</div>}

      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default SearchPage;
