import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ListFilm = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  gap: 100px;
  text-align: center;
  text-decoration: none;
`;

export const base_url = 'https://image.tmdb.org/t/p/w300/';

export const MovieList = ({ movies }) => {
  const locations = useLocation();

  return (
    <>
      <ListFilm>
        {movies.map(movie => (
          <li style={{ listStyle: 'none' }} key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: locations }}>
              <img
                src={`${base_url}${movie.poster_path}`}
                alt={movie.title ?? movie.name}
              />
              {movie.title ?? movie.name}
            </NavLink>
          </li>
        ))}
      </ListFilm>
    </>
  );
};
