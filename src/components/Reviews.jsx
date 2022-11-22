import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewByFilm } from 'servises/api';
import styled from 'styled-components';

const MyItem = styled.li`
  box-shadow: 2px 3px 10px #e0d7d7;
`;

const Reviews = () => {
  const [review, setReview] = useState('');
  console.log(review);

  const { movieId } = useParams();

  useEffect(() => {
    getReviewByFilm(movieId).then(setReview);
  }, [movieId]);

  if (!review) {
    return;
  }

  return (
    <>
      <ul>
        {review.length === 0 ? (
          <div> Sorry we don t have reviews </div>
        ) : (
          review.map(el => (
            <MyItem key={el.id}>
              <p>Author: {el.author}</p>
              <p>{el.content}</p>
            </MyItem>
          ))
        )}
      </ul>
    </>
  );
};
export default Reviews;
