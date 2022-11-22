import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'a25439e8f7b3ed32fbe2a72d68edd922';

export const getTrendingFilms = async () => {
  const {
    data: { results },
  } = await axios.get(`trending/all/day?api_key=${API_KEY}`);
  return results;
};

export const getFilmsById = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getFilmByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  console.log(results);
  return results;
};

export const getActorsByFilm = async id => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return cast;
};

export const getReviewByFilm = async id => {
  const {
    data: { results },
  } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return results;
};

