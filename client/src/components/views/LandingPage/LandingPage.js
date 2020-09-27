import React, { useEffect, useState } from "react";
// import React from "react";

import Row from "../../commons/Row";
import Banner from "../../commons/Banner";
import { API_URL, API_KEY, requests, fetchPersons } from "../../Config";
import MainNavbar from "../NavBar/MainNavbar";
import { Link } from "react-router-dom";

function LandingPage() {
	const [persons, setPersons] = useState([]);

	useEffect(() => {
		const fetchAPI = async () => {
			setPersons(await fetchPersons());
		};

		fetchAPI();
	}, []);

	return (
		<div className=''>
			<MainNavbar />
			<div style={{ paddingBottom: "5rem", paddingTop: "3rem" }}>
				{/* Nav */}
				<Banner />
				<Row
					title='NETFLIX ORIGINALS'
					fetchUrl={requests.fetchUpComing}
					isLargeRow
				/>
				<Row title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
				<Row title='TOP RATED' fetchUrl={requests.fetchTopRated} />
				<Row
					title='POPULAR MOVIES'
					fetchUrl={requests.fetchPopularMovies}
				/>
				<Row
					title='POPULAR TV SHOWS'
					fetchUrl={requests.fetchPopularTVShows}
				/>
				<Row title='TV SHOWS' fetchUrl={requests.fetchTVShows} />
				<Row
					title='COMEDY MOVIES'
					fetchUrl={requests.fetchComedyMovies}
				/>
				<Row
					title='HORROR MOVIES'
					fetchUrl={requests.fetchHorrorMovies}
				/>
				<Row
					title='ROMANCE MOVIES'
					fetchUrl={requests.fetchRomanceMovies}
				/>
				<Row
					title='DOCUMENTARIES'
					fetchUrl={requests.fetchDocumentaries}
				/>
				<div>
					<h2 className='row'>Trending People</h2>
					<div className='row_posters'>
						{persons.map((p, i) => (
							<div className='col-md-3 text-center' key={i}>
								<Link exact to={`/credits/${p.id}`}>
									<img
										className='img-fluid rounded-circle mx-auto d-block'
										src={p.profileImg}
										alt={p.name}
									/>
									<p className='font-weight-bold text-center'>
										{p.name}
									</p>
									<p
										className='font-weight-light text-center'
										style={{ color: "#5a606b" }}>
										Trending for {p.known}
									</p>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
