import { useState, useEffect, Suspense } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { TiArrowLeftThick } from 'react-icons/ti';

import { getFilmsById } from 'servises/api';

import styled from 'styled-components';

const ButtonGoBack = styled.button`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 5px 15px;
  border-color: transparent;
  border-radius: 3px;
  background-color: #3b3bcc;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const WrapperDatails = styled.div`
  margin-left: 25%;
  margin-bottom: 20px;
`;

const MyNavLink = styled(NavLink)`
  /* font-size: 20px; */
  margin: 20px;
  text-decoration: none;
  color: #3b3bcc;
  &:hover {
    color: orange;
  }
`;

const base_url = 'https://image.tmdb.org/t/p/w300/';

const MovieDatails = () => {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getFilmsById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }
  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <>
      <ButtonGoBack type="button" onClick={handleGoBack}>
        <TiArrowLeftThick /> Go back
      </ButtonGoBack>
      <Wrapper>
        <h1>{movie.title ?? movie.name}</h1>
        <img
          src={`${base_url}${movie.poster_path}`}
          alt={movie.title ?? movie.name}
        />
      </Wrapper>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <WrapperDatails>
        <MyNavLink to="cast" state={location.state}>
          Cast
        </MyNavLink>
        <MyNavLink to="reviews" state={location.state}>
          Reviews
        </MyNavLink>
      </WrapperDatails>
    </>
  );
};
export default MovieDatails;
