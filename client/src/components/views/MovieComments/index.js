import React from "react";
import Comments from "./Comments";

class MovieComments extends React.Component {
  render() {
    return <Comments movieId={this.props.movieId} />;
  }
}

export default MovieComments;
