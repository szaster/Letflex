import React from "react";
import Comments from "./Comments";
import { connect } from "react-redux";
import { loadComments } from "../../../_actions/comments";

class MovieComments extends React.Component {
  componentDidMount() {
    this.props.loadComments(this.props.movieId);
  }

  componentWillUnmount() {}

  render() {
    return <Comments comments={this.props.comments.data} />;
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadComments: (movieId) => dispatch(loadComments(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComments);
