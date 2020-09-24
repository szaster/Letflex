import { use } from "passport";
import React, { useEffect, useState } from "react";
import {
  Header,
  Grid,
  Comment,
  Form,
  Button,
  Segment,
  Card,
} from "semantic-ui-react";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  useEffect(() => {
    fetch("/api/blogPost/getBlogPosts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBlogPosts(res.blogPosts);
      });
  }, []);

  useEffect(() => {
    // fetch("/api/blogPost/newBlogPosts", {
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //   });
  }, []);

  var handlePostSubmit = (e) => {
    fetch("/api/blogPost/newBlogPosts", {
      method: "POST",
      body: JSON.stringify({
        title: newPostTitle,
        body: newPostBody,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetch("/api/blogPost/getBlogPosts")
          .then((res) => res.json())
          .then((res) => {
            setBlogPosts(res.blogPosts);
          });
      });
  };

  return (
    <div className="jumbotron">
      <Grid.Row centered>
        <input
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Title"
        ></input>
        <textarea onChange={(e) => setNewPostBody(e.target.value)}>
          Write Blog Post Here
        </textarea>
        <button onClick={handlePostSubmit}>Post</button>
      </Grid.Row>
      <Grid columns={4} padded>
        <Grid.Row centered>
          <Header> Blogs </Header>
        </Grid.Row>
        <Grid.Row>
          {blogPosts.map((post) => {
            return (
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Description>{post.body}</Card.Description>
                    <Card.Meta>
                      <span>{post.author}</span>
                      <span>{post.category}</span>
                    </Card.Meta>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Blog;
