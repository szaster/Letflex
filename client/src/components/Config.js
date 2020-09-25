import axios from 'axios';

//SERVER ROUTES
export const USER_SERVER = "/api/users";

export const API_URL = "https://api.themoviedb.org/3/";
export const API_KEY = "844dba0bfd8f3a4f3799f6130ef9e335";

export const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

//Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = "w1280";
export const IMAGE_SIZE = "w1280";

export const fetchPersons = async () => {
  try {
      const { data } = await axios.get(personUrl, {
          params: {
              api_key: apiKey
          }
      })
      const modifiedData = data['results'].map((p) => ({
          id: p['id'],
          popularity: p['popularity'],
          name: p['name'],
          profileImg: 'https://image.tmdb.org/t/p/w200' + p['profile_path'],
          known: p['known_for_department']
      }))
      return modifiedData;
  } catch (error) { }
}

export const fetchCasts = async (id) => {
  try {
      const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
          params: {
              api_key: apiKey,
          }
      });
      const modifiedData = data['cast'].map((c) => ({
          id: c['cast_id'],
          character: c['character'],
          name: c['name'],
          img: 'https://image.tmdb.org/t/p/w200' + c['profile_path'],
      }))

      return modifiedData;
  } catch (error) { }
}

// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = "w500";

const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

export const fetchMovieByGenre = async (genre_id) => {
  try {
      const { data } = await axios.get(moviesUrl, {
          params: {
              api_key: apiKey,
              language: 'en_US',
              page: 1,
              with_genres: genre_id
          }
      })
      const posterUrl = 'https://image.tmdb.org/t/p/original/';
      const modifiedData = data['results'].map((m) => ({
          id: m['id'],
          backPoster: posterUrl + m['backdrop_path'],
          popularity: m['popularith'],
          title: m['title'],
          poster: posterUrl + m['poster_path'],
          overview: m['overview'],
          rating: m['vote_average'],
      }))

      return modifiedData;
  } catch (error) { }
}



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
};

//https://api.themoviedb.org/3/movie/696374/videos?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
//https://api.themoviedb.org/3/movie/696374?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
//https://api.themoviedb.org/3/trending/all/day?api_key=844dba0bfd8f3a4f3799f6130ef9e335
//https://api.themoviedb.org/3/tv/popular?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=844dba0bfd8f3a4f3799f6130ef9e335&language=en-US
