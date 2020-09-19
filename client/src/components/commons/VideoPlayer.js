import React from "react";
import ReactDOM from "react-dom";
import { Embed, Modal } from "semantic-ui-react";
import './VideoPlayer.css';


function VideoPlayer() {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
	return (
		<div>
			<Embed
				id='O6Xo21L0ybE'
				placeholder='/images/image-16by9.png'
				source='youtube'>
				<Modal
					{...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered>
					<Modal.Header closeButton>
						<Modal.Title
							id='contained-modal-title-vcenter'
							style={{ color: "#000000", fontWeight: "bolder" }}>
							{detail.title}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body style={{ backgroundColor: "#000000" }}>
						<ReactPlayer
							className='container-fluid'
							url={youtubeUrl + video.key}
							playing
							width='100%'></ReactPlayer>
					</Modal.Body>
				</Modal>
			</Embed>
		</div>
	);
}

export default VideoPlayer;
