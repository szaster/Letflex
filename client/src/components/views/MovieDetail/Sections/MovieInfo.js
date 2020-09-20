import React from "react";
import { Segment, Label, Item, Divider, Icon } from "semantic-ui-react";
import Favorite from "./Favorite";
import LikeDislikes from "./LikeDislikes";

function MovieInfo(props) {
  //const [casts, setCasts] = useState([]);
  const { movie, credit } = props;
  // const castList = casts.slice(0, 4).map((c, i) => {

  // });
  return (
    <Segment inverted size="massive">
      <Item>
        <Item.Content>
          <Item.Header as="h3" style={{ color: "white" }}>
            More Details..
          </Item.Header>
          <div>
            <Favorite />
          </div>
          <br />
          <div>
            <LikeDislikes />
          </div>
          <Item.Description as="h4" style={{ color: "white" }}>
            Title: {movie.title}
          </Item.Description>
          <Divider />
          <Item.Description as="h4" style={{ color: "white" }}>
            Actors:
          </Item.Description>
          <Divider />
          <Item.Description as="h4" style={{ color: "white" }}>
            Crew:
          </Item.Description>
          <Divider />
          <Item.Extra>
            <Label style={{color: 'rgb(244, 193, 15)'}} color="grey">Release Date: { movie.release_date}</Label>
            <Label color="grey">Revenue: {movie.revenue}</Label>
            <Label color="grey">Runtime: {movie.runtime}</Label>
            <Label color="grey">Vote Average: {movie.vote_average}</Label>
            <Label color="grey">Vote Count: {movie.vote_count}</Label>
            <Label color="grey">Status: {movie.status}</Label>
            <Label color="grey">Popularity: {movie.popularity}</Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    </Segment>
  );
}

export default MovieInfo;
