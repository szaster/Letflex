import React from "react";
import { Segment, Label, Item, Divider } from "semantic-ui-react";
import Favorite from "./Favorite";
import LikeDislikes from "./LikeDislikes";

function MovieInfo(props) {
  const { movie } = props;

  return (
    <Segment inverted size="massive">
      <Item>
        <Item.Content>
          <Item.Header
            as="h1"
            style={{ color: "yellow ", textAlign: "center" }}
          >
            {movie.title}
          </Item.Header>
          <Favorite />
          <br />
          <LikeDislikes />
          <Divider />
          <Item.Extra>
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Release Date:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.release_date}
              </Label.Detail>
            </Label>
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Revenue:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.revenue}
              </Label.Detail>
            </Label>
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Runtime:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.runtime}
              </Label.Detail>
            </Label>
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Vote Average:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.vote_average}
              </Label.Detail>
            </Label>
            <Divider />
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Vote Count:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.vote_count}
              </Label.Detail>
            </Label>
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Status:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.status}
              </Label.Detail>
            </Label>
            <Label
              size="large"
              style={{ backgroundColor: "black", color: "white" }}
            >
              Popularity:
              <Label.Detail style={{ color: "yellow" }}>
                {movie.popularity}
              </Label.Detail>
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Segment>
  );
}

export default MovieInfo;
