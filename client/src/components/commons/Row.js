import React, { useState, useEffect } from "react";
import axios from '../axios';
//import { Grid, Image } from "semantic-ui-react";

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);
	
	useEffect(() => {
		// if [], run once when the row loads and dont run again
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			console.log(request)
			setMovies(request)
			return request;
		}
		fetchData();
	}, []);

	return (
		<div>
			<h2>{title}</h2>
			{/* contain posters */}
		</div>
	);
}

export default Row;
