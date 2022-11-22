import { MovieList } from 'components/MovieList';
import { useState, useEffect, Suspense } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { getFilmByQuery } from 'servises/api';
import styled from 'styled-components';

const Form = styled.form`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const movieName = searchParams.get('query');
    if (!movieName) {
      return;
    }
    getFilmByQuery(movieName).then(setMovies);
  }, [searchParams]);

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });
  };

  if (!movies) {
    return;
  }

  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
       
     
      <Form onSubmit={onSubmit}>
        <input type="text" onChange={handleChange}></input>
        <button type="submit"> Search </button>
      </Form>
      <MovieList movies={movies} />
      </Suspense>
    </>
  );
};

export default Movies;
