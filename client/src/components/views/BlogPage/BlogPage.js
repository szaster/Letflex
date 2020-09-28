import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Header,
  Grid,
  Form,
  Button,
  Segment,
  Divider,
  Item,
} from "semantic-ui-react";
import "./BlogPage.css";
import MainNavbar from "../NavBar/MainNavbar";

import { connect } from "react-redux";

function BlogPage(props) {
  const [blogPosts, setBlogPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");

  var fetchPosts = () => {
    fetch("/api/blogPost/getBlogPosts")
      .then((res) => res.json())
      .then((res) => {
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

      <Header size="huge" textAlign="center" style={{ color: "white" }}>
        Movie Review Blogs
      </Header>
      <Divider />
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={16} computer={6}>
            <Segment inverted compact>
              <Header>Ready to critique? Let's begin!</Header>
              <Form inverted>
                <Form.Input
                  fluid
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  placeholder="Movie Title"
                  style={{ minWidth: 450 }}
                />

                <Form.TextArea
                  value={newPostBody}
                  onChange={(e) => setNewPostBody(e.target.value)}
                  placeholder="Write your movie review here!"
                  style={{ minWidth: 450 }}
                />

                <Button
                  inverted
                  color="green"
                  floated="right"
                  onClick={handlePostSubmit}
                >
                  {" "}
                  Post
                </Button>
              </Form>
            </Segment>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={16} computer={10}>
            <Segment inverted>
              {blogPosts.map((post) => {
                return (
                  <Item.Group relaxed>
                    <Item>
                      <Item.Image
                        src={post.author.image}
                        size="small"
                        circular
                      />

                      <Item.Content verticalAlign="middle">
                        <Item.Header style={{ color: "white" }}>
                          {post.title}
                        </Item.Header>
                        <Item.Description style={{ color: "white" }}>
                          {post.body}
                        </Item.Description>
                        <Item.Meta>
                          <span style={{ color: "yellow" }}>
                            Posted by {post.author.displayName}{" "}
                            {moment(post.createdAt)
                              .startOf("ms")
                              .fromNow(post.createdAt)}{" "}
                            ago
                          </span>
                          <span>
                            {props.user.id === post.author.id && (
                              <Item.Extra>
                                <Button
                                  color="red"
                                  inverted
                                  floated="right"
                                  onClick={(e) => handlePostDelete(post._id)}
                                >
                                  Delete Review
                                </Button>
                              </Item.Extra>
                            )}
                          </span>
                        </Item.Meta>
                      </Item.Content>
                    </Item>
                    <Divider />
                  </Item.Group>
                );
              })}
            </Segment>
          </Grid.Column>
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
