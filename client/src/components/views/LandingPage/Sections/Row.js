import React, { useState } from "react";
import { Grid, Image } from "semantic-ui-react";

function Row({title}) {
    const [movies, setMovies] = useState([]);


	return (
		<div>
			<Grid doubling columns={5}>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
				</Grid.Column>
			</Grid>
		</div>
	);
}

export default Row;
