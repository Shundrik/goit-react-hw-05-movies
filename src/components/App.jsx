// import  MovieDatails  from 'pages/MovieDatails.jsx';
// import  Movies  from 'pages/Movies.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home.jsx';
// import { Reviews } from './Reviews.jsx';
// import { Cast } from './Cast.jsx';
import { NotFound } from './NotFound.jsx';
import { GiFilmProjector } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { lazy } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  gap: 20px;
  background-color: #3300ffc0;
  color: #ffffff;
  box-shadow: 5px 2px 10px orange;
  padding: 20px 40px;
  margin-bottom: 20px;
`;
const StyledLink = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;
const Movies = lazy(() => import('../pages/Movies'));
const MovieDatails = lazy(() => import('../pages/MovieDatails'));
const Cast = lazy(() => import('../components/Cast'));
const Reviews = lazy(() => import('../components/Reviews'));

export const App = () => {
  return (
    <>
      <Nav>
        <Link
          style={{
            marginRight: '15px',
            color: 'white',
            boxShadow: '1px 2px 10px',
            borderRadius: '3px',
            padding: '3px',
          }}
          to="/"
        >
          <GiFilmProjector />
        </Link>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies"> Movies</StyledLink>
      </Nav>

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDatails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};
