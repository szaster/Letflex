import React, { useState } from "react";
//import { Grid, Image } from "semantic-ui-react";

function Row({title}) {
    const [movies, setMovies] = useState([]);


	return (
		<div>
			<h2>{title}</h2>
			{/* contain posters */}
		</div>
	);
}

export default Row;
