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
  Input,
  Divider,
} from "semantic-ui-react";
import "./BlogPage.css";
import MainNavbar from "../NavBar/MainNavbar";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  var fetchPosts = () => {
    fetch("/api/blogPost/getBlogPosts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setBlogPosts(res.blogPosts);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  var handlePostDelete = (postID) => {
    fetch(`/api/blogPost/deleteBlogPost/${postID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        fetchPosts();
      });
  };

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
        setNewPostBody("");
        setNewPostTitle("");
        fetchPosts();
      });
  };

  var handlePostEdit = (postID) => {};

  return (
    <div className="blog">
      <MainNavbar />
      <Grid centered paded className="bgBlog">
        <Header
          size="large"
          style={{ color: "white", margin: "auto", marginTop: "3rem" }}
        >
          Blogs
        </Header>
      </Grid>
      <Grid.Row centered>
        <Form>
          <Grid.Row>
            <Input
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              placeholder="blog title"
              style={{ minWidth: 400, marginBottom: "1rem" }}
            ></Input>
            <Button
              Secondary
              basic
              inverted
              color="red"
              style={{ marginBottom: "0.9rem" }}
              onClick={handlePostSubmit}
            >
              Post
            </Button>
          </Grid.Row>
          <Grid.Row>
            <textArea
              onChange={(e) => setNewPostBody(e.target.value)}
              placeholder="Write your blog here"
              value={newPostBody}
              style={{ minWidth: 400, marginBottom: "1.5rem" }}
            />
          </Grid.Row>
        </Form>
        <Divider />
      </Grid.Row>
      <Grid
        columns={2}
        padded
        style={{ marginLeft: "9rem", marginRight: "9rem" }}
      >
        <Grid.Row>
          {blogPosts.map((post) => {
            return (
              <Grid.Column>
                <Card
                  style={{
                    minWidth: 600,
                    marginBottom: "1.5rem",
                  }}
                >
                  <Card.Content style={{ textAlign: "center" }}>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Description>{post.body}</Card.Description>
                    <Card.Meta>
                      <span>{post.author}</span>
                      <span>{post.category}</span>
                      <span>
                        <button onClick={(e) => handlePostDelete(post._id)}>
                          Delete
                        </button>
                      </span>
                      <span>
                        <button onClick={(e) => handlePostEdit(post._id)}>
                          Edit
                        </button>
                      </span>
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
