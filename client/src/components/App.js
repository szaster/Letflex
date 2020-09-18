import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import AboutPage from "./views/AboutPage/AboutPage.js";
import NavBar from "./views/NavBar/NavBar";
// import Nav from './commons/Nav.js';
import SearchPage from "./views/SearchPage/SearchPage.js";
import "./App.css";

import Footer from "./views/Footer/Footer";

import BlogPage from "./views/BlogPage/BlogPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      {/* <Nav /> */}
      <div className="appBackground">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blogs" component={BlogPage} />

          <Route exact path="/moviedetails" component={MovieDetail} />
          <Route exact path="/login" component={LoginPage} />

          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/favorite" component={FavoritePage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
