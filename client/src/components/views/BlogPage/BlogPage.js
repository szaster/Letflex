import { use } from "passport";
import React, { useEffect, useState } from "react";
import {
  Header,
  Grid,
  Comment,
  Form,
  Button,
  Segment,
} from "semantic-ui-react";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blogPost/getBlogPosts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBlogPosts(res.blogPosts);
      });
  }, []);

  useEffect(() => {
    fetch("/api/blogPost/newBlogPosts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
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
                {post.title} {post.category} {post.body} {post.author}
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Blog;
