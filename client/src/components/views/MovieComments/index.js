import React from "react";
import Comments from "./Comments";

class MovieComments extends React.Component {
  componentDidMount() {
    if (!this.props.comments.loaded) {
      this.props.loadComments(this.props.movieId);
    }
  }

  render() {
    return <Comments />;
  }
}

export default MovieComments;
