import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import AboutPage from "./views/AboutPage/AboutPage.js";
// import NavBar from "./views/NavBar/NavBar";
import HomePage from "./views/HomePage/HomePage.js";
// import Nav from './commons/Nav.js';
import SearchPage from "./views/SearchPage/SearchPage.js";
import BlogPostPage from "./views/BlogPostPage/BlogPostPage.js";
import "./App.css";

import "./App.css";
import RightMenu from "../components/views/NavBar/Sections/RightMenu";
import Footer from "./views/Footer/Footer";

import BlogPage from "./views/BlogPage/BlogPage";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

import MovieDetail from "./views/MovieDetail/MovieDetail";
import FavoritePage from "./views/FavoritePage/FavoritePage";

import { fetchUser } from "../_actions/authActions";

class App extends React.Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.fetchUser();
    }
  }
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {/* <NavBar /> */}
        <div className="appBackground">
          {this.props.auth.isAuthenticated ? (
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <Route exact path="/blogs" component={BlogPage} />
              <Route exact path="/moviedetails" component={MovieDetail} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/movie/:movieId" component={MovieDetail} />
              <Route exact path="/favorite" component={FavoritePage} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          )}
        </div>
        <Footer />
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
