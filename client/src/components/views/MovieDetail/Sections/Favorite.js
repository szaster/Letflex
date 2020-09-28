import React from "react";
import { Label, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { loadFavorites, toggleFavorite } from "../../../../_actions/favorites";

class Favorite extends React.Component {
  componentDidMount() {
    this.props.loadFavorite(this.props.movieId);
  }

  toggleFavorite = () => {
    this.props.toggleFavorite({
      movieId: this.props.movieId,
      isFavorite: !this.props.isFavorite,
    });
  };

  render() {
    return (
      <Label
        as="a"
        color="red"
        ribbon="right"
        style={{ color: "black", fontWeight: "bold" }}
        onClick={this.toggleFavorite}
      >
        <Icon name="heart" color="white" />{" "}
        {!this.props.isFavorite ? "Add to favorites" : "Remove from favorites"}
      </Label>
    );
  }
}

function mapStateToProps(state) {
  return state.favorites;
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavorite: (data) => dispatch(toggleFavorite(data)),
    loadFavorite: (movieId) => dispatch(loadFavorites(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
