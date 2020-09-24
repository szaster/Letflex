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
import MainNavbar from "../NavBar/MainNavbar";

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
      <MainNavbar />
      <Grid centered paded>
        <Header size="large" style={{ color: "white", margin: "auto" }}>
          {" "}
          Blogs{" "}
        </Header>
      </Grid>
      <Grid.Row centered>
        <Form>
          <Grid.Row>
            <input
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="blog title"
            ></input>
            <Button inverted color="red" onClick={handlePostSubmit}>
              Post
            </Button>
          </Grid.Row>
          <textArea
            onChange={(e) => setNewPostBody(e.target.value)}
            placeholder="Write your blog here"
            style={{ minHeight: 100 }}
          />
        </Form>
      </Grid.Row>
      <Grid columns={4} padded>
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
