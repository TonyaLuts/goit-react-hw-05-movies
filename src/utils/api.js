import axios from 'axios';

// const API_TOKEN =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjA3OGQ1NWRkMDRhMzA4MDcyYWM4ZTBkZTY1MzkyOSIsInN1YiI6IjY1NzA3ZDAxZDE4ZmI5MDk1OTQ1ODA5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.32EJ87k8xy4ZL9U0QPenDYi6K1siQF6cgau1sTEczR0';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5b078d55dd04a308072ac8e0de653929';

export const fetchTrandMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data.results;
};

export const fetchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

export const fetchMovieDetails = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
  );

  return response.data;
};

export const fetchMovieCast = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
  );

  return response.data.cast;
};

export const fetchMovieReviews = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );

  return response.data.results;
};
