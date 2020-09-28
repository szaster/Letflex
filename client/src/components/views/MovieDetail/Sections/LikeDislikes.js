import React from "react";
import { Label, Icon } from "semantic-ui-react";

function LikeDislikes() {
  const [Likes, setLikes] = React.useState(0);

  React.useEffect(() => {
    const parsedLike = Number(localStorage.getItem("Likes") || 0);
    const movieId = Number(localStorage.getItem("movieId"));
    setLikes(parsedLike, movieId);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("Likes", Likes);
  }, [Likes]);

  return (
    <Label color="red" size="small">
      <Icon name="thumbs up" link onClick={() => setLikes((c) => c + 1)} />
      {Likes}
    </Label>
  );
}

export default LikeDislikes;
