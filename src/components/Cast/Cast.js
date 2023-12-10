import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'utils/api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const loadCast = async () => {
      try {
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast);
      } catch (error) {
        toast.error('Something went wrong. Try the request again');
      }
    };
    loadCast();
  }, [movieId]);

  if (!cast) return;

  return (
    <ul>
      {cast &&
        cast.map(item => (
          <li key={item.id}>
            {item.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
                width="100"
              />
            )}
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      {cast.length === 0 && <p>There is no cast list</p>}
    </ul>
  );
};
