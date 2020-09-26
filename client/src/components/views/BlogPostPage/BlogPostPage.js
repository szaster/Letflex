import React from "react";
import { Header, Grid, Comment, Form, Button } from "semantic-ui-react";
import CKEditor from 'ckeditor4-react';

function Blog() {
  var comments = [
    {
      author: "lIZ",
      date: "today at 5pm",
      text: "my comments",
    },
  ];
  return (
    <div className="jumbotron">
      <Grid padded>
        <Grid.Row>
          <Header> Top 10 Movies</Header>
          <div>
            <h1></h1>
          </div>
          <Comment.Group>
            <Header as="h3" dividing>
              Comments
            </Header>
            {comments.map((comment) => {
              return (
                <Comment>
                  <Comment.Avatar src="/images/avatar/small/joe.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">{comment.author}</Comment.Author>
                    <Comment.Metadata>
                      <div>{comment.date}</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              );
            })}

            <Form reply>
              <Form.TextArea />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Comment.Group>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Blog;
