import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'utils/api';
import toast from 'react-hot-toast';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const loadReviewst = async () => {
      try {
        const movieReviews = await fetchMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        toast.error('Something went wrong. Try the request again');
      }
    };

    loadReviewst();
  }, [movieId]);

  if (!reviews) return;

  return (
    <ul>
      {reviews &&
        reviews.map(item => (
          <li key={item.id}>
            <h3>Author: {item.author}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}
    </ul>
  );
};
