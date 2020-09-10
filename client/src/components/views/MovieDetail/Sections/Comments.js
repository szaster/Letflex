import React, { useState } from "react";
//import { Input, Typography, } from 'antd';
//import axios from 'axios';
//import { useSelector } from 'react-redux';
//import SingleComment from './SingleComment';
//import ReplyComment from './ReplyComment';
import { Button, Comment, Form, Header, Icon, Label } from "semantic-ui-react";
//import LikeDislikes from './Sections/LikeDislikes';
//import CKEditor from '@ckeditor/ckeditor5-react';
//import CKEditor from 'ckeditor4-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const { TextArea } = Input;
// const { Title } = Typography;

function Comments(props) {
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
		<div style={{ background: "white" }}>
            <Button as='div' labelPosition='right'>
									<Button color='red'>
										<Icon name='thumbs up' />
										Like
									</Button>
									<Label
										as='a'
										basic
										color='red'
										pointing='left'>
										2,048
									</Label>
								</Button>
			<div>
				<p name='Recomanded'></p>
				<br></br>
				<Button color='facebook'>
					<Icon name='share' /> Facebook
				</Button>
				<Button color='twitter'>
					<Icon name='share' /> Twitter
				</Button>
				<Button color='google plus'>
					<Icon name='share' /> Google Plus
				</Button>
				<Button color='vk'>
					<Icon name='share' /> VK
				</Button>
				<Button color='linkedin'>
					<Icon name='share' /> LinkedIn
				</Button>
				<Button color='instagram'>
					<Icon name='share' /> Instagram
				</Button>
				<Button color='youtube'>
					<Icon name='share' /> YouTube
				</Button>
			</div>
			<hr></hr>
			<div style={{ background: "white" }}>
				<Comment.Group threaded>
					<Header as='h3' dividing>
						Comments
					</Header>

					<Comment>
						<Comment.Avatar
							as='a'
							src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'
						/>
						<Comment.Content>
							<Comment.Author as='a'>Matt</Comment.Author>
							<Comment.Metadata>
								<span>Today at 5:42PM</span>
							</Comment.Metadata>
							<Comment.Text>How artistic!</Comment.Text>
							<Comment.Actions>
								<a href='www.semantic-ui.com'>Reply</a>			
							</Comment.Actions>
						</Comment.Content>
					</Comment>

					<Comment>
						<Comment.Avatar
							as='a'
							src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'
						/>
						<Comment.Content>
							<Comment.Author as='a'>Elliot Fu</Comment.Author>
							<Comment.Metadata>
								<span>Yesterday at 12:30AM</span>
							</Comment.Metadata>
							<Comment.Text>
								<p>
									This has been very useful for my research.
									Thanks as well!
								</p>
							</Comment.Text>
							<Comment.Actions>
								<a href='www.semantic-ui.com'>Reply</a>
							</Comment.Actions>
						</Comment.Content>

						<Comment.Group>
							<Comment>
								<Comment.Avatar
									as='a'
									src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'
								/>
								<Comment.Content>
									<Comment.Author as='a'>
										Jenny Hess
									</Comment.Author>
									<Comment.Metadata>
										<span>Just now</span>
									</Comment.Metadata>
									<Comment.Text>
										Elliot you are always so right :)
									</Comment.Text>
									<Comment.Actions>
										<a href='www.semantic-ui.com'>Reply</a>
									</Comment.Actions>
								</Comment.Content>
							</Comment>
						</Comment.Group>
					</Comment>

					<Comment>
						<Comment.Avatar
							as='a'
							src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'
						/>
						<Comment.Content>
							<Comment.Author as='a'>
								Joe Henderson
							</Comment.Author>
							<Comment.Metadata>
								<span>5 days ago</span>
							</Comment.Metadata>
							<Comment.Text>
								Dude, this is awesome. Thanks so much
							</Comment.Text>
							<Comment.Actions>
								<a href='www.semantic-ui.com'>Reply</a>
							</Comment.Actions>
						</Comment.Content>
					</Comment>

					<Form reply>
						<Form.TextArea />
						<Button
							content='Add Reply'
							labelPosition='left'
							icon='edit'
							primary
						/>
					</Form>
				</Comment.Group>
			</div>
		</div>
	);
}

export default Comments;
