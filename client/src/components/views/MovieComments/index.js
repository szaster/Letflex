import React from "react";
import Comments from "./Comments";
import { connect } from "react-redux";
import { loadComments, postComment } from "../../../_actions/comments";

class MovieComments extends React.Component {
  componentDidMount() {
    this.props.loadComments(this.props.movieId);
  }

  componentWillUnmount() {}

  render() {
    return (
      <Comments
        comments={this.props.comments.data}
        postComment={(content) => {
          this.props.postComment({ content, movieId: this.props.movieId });
        }}
      />
    );
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
    postComment: (commentData) => dispatch(postComment(commentData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieComments);
