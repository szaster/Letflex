import React from "react";
import { Button, Comment, Form, Header, Segment } from "semantic-ui-react";
import moment from 'moment'

function formatDate(date) {
  const d = new Date(date);
  const formattedDate =
    d.toLocaleTimeString() +
    "-" +
    d.getDate() +
    "-" +
    (d.getMonth() + 1) +
    "-" +
    d.getFullYear();
    

  return formattedDate;
}

//moment(date).startOf('hour').fromNow(date);

class Comments extends React.Component {
  state = { content: "" };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    this.props.postComment(this.state.content);
    this.setState({ content: "" });
  };

  render() {
    return (
      <Segment inverted>
        <Comment.Group>
          <Header as="h3" dividing style={{ color: "white" }}>
            Comments
          </Header>
          {this.props.comments.map((comment) => (
            <Comment>
              <Comment.Avatar as="a" src={comment.author.image} />
              <Comment.Content>
                <Comment.Author as="a" style={{ color: "white" }}>
                  {comment.author.displayName}
                </Comment.Author>
                <Comment.Metadata style={{ color: "white" }}>
                  <span>{moment(comment.createdAt).startOf('ms').fromNow(comment.createdAt)} ago</span>
                </Comment.Metadata>
                <Comment.Text style={{ color: "white" }}>
                  {comment.content}
                </Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
        </Comment.Group>
        <Form onSubmit={this.handleSubmit}>
          <Form.TextArea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
          />
          <Button
            content="Post comment"
            labelPosition="right"
            icon="edit"
            primary
          />
        </Form>
      </Segment>
    );
  }
}

export default Comments;
