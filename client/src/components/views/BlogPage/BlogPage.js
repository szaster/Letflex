import React from "react";
import {
  Header,
  Grid,
  Comment,
  Form,
  Button,
  Segment,
} from "semantic-ui-react";
import NavBar from "../NavBar/NavBar";
function Blog() {
  var blogPosts = [
    {
      author: "lIZ",
      title: "Blog Title",
    },
    {
      author: "Ross",
      title: "Blog Title 2",
    },
    {
      author: "Anthony",
      title: "Blog Title 3",
    },
  ];
  return (
    <div className="jumbotron">
      <Grid padded>
        <Grid.Row>
          <Header> Blogs </Header>
        </Grid.Row>
        <Grid.Row>
          {blogPosts.map((post) => {
            return (
              <Grid.Column>
                {post.title} {post.author}
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Blog;
