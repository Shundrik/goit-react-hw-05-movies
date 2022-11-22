import { MovieList } from 'components/MovieList';
import { useState, useEffect } from 'react';


import { getTrendingFilms } from 'servises/api';
// import { Movies } from './Movies';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);

  return (
    <>
     <MovieList movies={movies} />
      
    </>
  );
};
