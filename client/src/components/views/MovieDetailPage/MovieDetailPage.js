import React, { useEffect, useState } from 'react'
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import MainImage from '../LandingPage/Sections/ MainImage';

function MovieDetailPage() {

   const [Movie, setMovie] = useState([])

    useEffect((props) => {

        const movieId = props.match.params.movieId

        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setMovie(response)
        })
    }, [])

    return (
        <div>
            {/* Main Image */}
            {Movie && (
				<MainImage
					image={`${IMAGE_URL}w1280${Movie.backdrop_path} && Movie.backdrop_path}`}
					title={Movie.original_title}
					text={Movie.overview}
				/>
			)}

            {/* Body */}
            <div style={{ width: '85%', margin: '1rem auto'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <button> Add to Favorite</button>
            </div>
            </div>

        </div>
    )
}

export default MovieDetailPage
