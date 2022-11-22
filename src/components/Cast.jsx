import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { base_url } from './MovieList';
import { getActorsByFilm } from 'servises/api';

import styled from 'styled-components';

const ListAktors = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: space-between;
  gap: 16px;
  text-align: center;
  text-decoration: none;
  list-style: none;
`;

const ItemActors = styled.li`
  padding: 10px;
  box-shadow: 2px 3px 10px #e0d7d7;
  &:hover {
    box-shadow: 2px 5px 10px orange;
  }
`;

const Cast = () => {
  const [cast, setCast] = useState([]);
  console.log(cast);

  const { movieId } = useParams();

  useEffect(() => {
    getActorsByFilm(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <>
      <ListAktors>
        {cast.length === 0 ? (
          <div> Sorry we don t have cast </div>
        ) : (
          cast.map(el => (
            <ItemActors key={el.id}>
              <img
                src={`${base_url}${el.profile_path}`}
                width="150px"
                alt={`${el.name}`}
              />
              <p>Character: {el.character}</p>
              <b>Original_name: {el.original_name}</b>
            </ItemActors>
          ))
        )}
      </ListAktors>
    </>
  );
};
export default Cast;
