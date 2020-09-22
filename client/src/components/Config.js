//SERVER ROUTES
export const USER_SERVER = '/api/users';



export const API_URL = 'https://api.themoviedb.org/3/';
export const API_KEY = '844dba0bfd8f3a4f3799f6130ef9e335';


export const IMAGE_BASE_URL ='http://image.tmdb.org/t/p/';

//Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w1280'
export const IMAGE_SIZE = 'w1280'

// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w500'

export const requests = {
    fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopularTVShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchTVShows: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchPopularMovies: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    //fetchMovieVideos: `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    //similarMovies: `/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
}


//https://api.themoviedb.org/3/movie/696374/videos?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
//https://api.themoviedb.org/3/movie/696374?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
//https://api.themoviedb.org/3/trending/all/day?api_key=844dba0bfd8f3a4f3799f6130ef9e335
//https://api.themoviedb.org/3/tv/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US