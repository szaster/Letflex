import React, { useEffect, useState } from "react";
import Row from "../../commons/Row";
import Banner from "../../commons/Banner";
import { requests } from "../../Config";
import NavBar from "../NavBar/NavBar";
//import { Row } from "semantic-ui-react";

function LandingPage() {

	return (
		<div className=''>
    <NavBar />
			<div style={{ paddingBottom: "5rem", paddingTop: "3rem" }}>
				{/* Nav */}
				<Banner />
				<Row
					title='Netflix Originals'
					fetchUrl={requests.fetchUpComing}
					isLargeRow
				/>
				<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
				<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
				<Row
					title='Popular Movies'
					fetchUrl={requests.fetchPopularMovies}
				/>
				<Row
					title='Popular TV Shows'
					fetchUrl={requests.fetchPopularTVShows}
				/>
				<Row
					title='TV Shows'
					fetchUrl={requests.fetchTVShows}
				/>
				<Row
					title='Comedy Movies'
					fetchUrl={requests.fetchComedyMovies}
				/>
				<Row
					title='Horror Movies'
					fetchUrl={requests.fetchHorrorMovies}
				/>
				<Row
					title='Romance Movies'
					fetchUrl={requests.fetchRomanceMovies}
				/>
				<Row
					title='Documentaries'
					fetchUrl={requests.fetchDocumentaries}
				/>
			</div>
		</div>
	);

}

export default LandingPage;
