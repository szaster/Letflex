import React, { useState, useEffect } from "react";
//import { Input, Typography, } from 'antd';
//import axios from 'axios';
//import { useSelector } from 'react-redux';
//import SingleComment from './SingleComment';
//import ReplyComment from './ReplyComment';
import {
  Button,
  Comment,
  Form,
  Header,
  Segment,
  Label,
} from "semantic-ui-react";
//import LikeDislikes from './Sections/LikeDislikes';
//import CKEditor from '@ckeditor/ckeditor5-react';
//import CKEditor from 'ckeditor4-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const { TextArea } = Input;
// const { Title } = Typography;

function Comments(props) {
  console.log(props.CommentLists);
  // const [comments, setComments] = useState([]);

  // var fetchComments = () => {
  //   fetch(`/api/comments/getComments/${movieId}`)
  //     .then((resp) => resp.json())
  //     .then((respJson) => {
  //       console.log(respJson);
  //     });
  // };

  // useEffect(() => {
  //   fetchComments();
  // });

  // const user = useSelector(state => state.user)
  // const [Comment, setComment] = useState("")

  // const handleChange = (e) => {
  //     setComment(e.currentTarget.value)
  // }

  // const onSubmit = (e) => {
  //     e.preventDefault();

  //     if (user.userData && !user.userData.isAuth) {
  //         return alert('Please Log in first');
  //     }

  //     const variables = {
  //         content: Comment,
  //         writer: user.userData,
  //         postId: props.postId
  //     }
  //     console.log(variables)

  //     axios.post('/api/comment/saveComment', variables)
  //         .then(response => {
  //             if (response.data.success) {
  //                 setComment("")
  //                 props.refreshFunction(response.data.result)
  //             } else {
  //                 alert('Failed to save Comment')
  //             }
  //         })
  // }

  return (
    <div>
      <Segment inverted>
        <Comment.Group threaded>
          <Header as="h3" dividing style={{ color: "white" }}>
            Comments
          </Header>

          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a" style={{ color: "white" }}>
                Matt
              </Comment.Author>
              <Comment.Metadata style={{ color: "white" }}>
                <span>Today at 5:42PM</span>
              </Comment.Metadata>
              <Comment.Text style={{ color: "white" }}>
                How artistic!
              </Comment.Text>
              <Comment.Actions as="a" href="">
                Reply
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a" style={{ color: "white" }}>
                Elliot Fu
              </Comment.Author>
              <Comment.Metadata style={{ color: "white" }}>
                <span>Yesterday at 12:30AM</span>
              </Comment.Metadata>
              <Comment.Text style={{ color: "white" }}>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </Comment.Text>
              <Comment.Actions as="a" href="">
                Reply
              </Comment.Actions>
            </Comment.Content>

            <Comment.Group>
              <Comment>
                <Comment.Avatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
                />
                <Comment.Content>
                  <Comment.Author as="a" style={{ color: "white" }}>
                    Jenny Hess
                  </Comment.Author>
                  <Comment.Metadata style={{ color: "white" }}>
                    <span>Just now</span>
                  </Comment.Metadata>
                  <Comment.Text style={{ color: "white" }}>
                    Elliot you are always so right :)
                  </Comment.Text>
                  <Comment.Actions as="a" href="">
                    Reply
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </Comment.Group>
          </Comment>

          <Comment>
            <Comment.Avatar
              as="a"
              src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
            />
            <Comment.Content>
              <Comment.Author as="a" style={{ color: "white" }}>
                Joe Henderson
              </Comment.Author>
              <Comment.Metadata style={{ color: "white" }}>
                <span>5 days ago</span>
              </Comment.Metadata>
              <Comment.Text style={{ color: "white" }}>
                Dude, this is awesome. Thanks so much
              </Comment.Text>
              <Comment.Actions as="a" href="">
                Reply
              </Comment.Actions>
            </Comment.Content>
          </Comment>

          <Form reply>
            <Form.TextArea />
            <Button
              content="Add Reply"
              labelPosition="right"
              icon="edit"
              primary
            />
          </Form>
        </Comment.Group>
      </Segment>
    </div>
  );
}

export default Comments;
