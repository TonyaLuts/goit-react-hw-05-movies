import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'utils/api';
import toast from 'react-hot-toast';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { AdditionalInfo } from 'components/BoxInfo/AdditionalInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    const loadDetails = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        toast.error('Something went wrong. Try the request again');
      }
    };

    loadDetails();
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <main>
      {movieDetails && (
        <div>
          <BackLink />
          <MovieCard movieDetails={movieDetails} />
        </div>
      )}
      <AdditionalInfo />
      <Outlet />
    </main>
  );
};

export default MovieDetails;

// location.state && location.state.from
// location.state?.from
