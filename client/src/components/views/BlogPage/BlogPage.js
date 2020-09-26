import { use } from "passport";
import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Header,
  Grid,
  Form,
  Button,
  Card,
  Input,
  Image,
} from "semantic-ui-react";
import "./BlogPage.css";
import MainNavbar from "../NavBar/MainNavbar";

import { connect } from "react-redux";

function formatDate(date) {
  const d = new Date(date);
  const formattedDate = `${d.toLocaleDateString()}    ${d.toLocaleTimeString()}`;

  return formattedDate;
}

function BlogPage(props) {
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
        fetchPosts();
        setNewPostTitle("");
        setNewPostBody("");
      });
  };

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
            <textarea
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              placeholder="Write your blog here"
              style={{ minWidth: 400, marginBottom: "1.5rem" }}
            ></textarea>
          </Grid.Row>
        </Form>
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
                    <span>
                      <Image
                        src={post.author.image}
                        size="mini"
                        floated="left"
                      />
                    </span>
                    <Card.Header>{post.title}</Card.Header>
                    <Card.Description>{post.body}</Card.Description>
                    <Card.Meta floated="left">
                      <span>Posted by: {post.author.displayName}</span>
                      <span style={{ textAlign: "right" }}>
                        {moment(post.createdAt)
                          .startOf("ms")
                          .fromNow(post.createdAt)}{" "}
                        ago
                      </span>
                      <span>
                        {props.user.id == post.author.id && (
                          <Form.Button
                            basic
                            color="black"
                            content="black"
                            onClick={(e) => handlePostDelete(post._id)}
                          >
                            Delete blog
                          </Form.Button>
                        )}
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

function mapStatesToProps(state) {
  return {
    user: state.auth.user,
  };
}

// Connecting component to redux state
export default connect(mapStatesToProps)(BlogPage);
