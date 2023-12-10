import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { fetchMovies } from 'utils/api';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const movieId = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieId) {
      setMovies([]);
      return;
    }
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        const getMovies = await fetchMovies(movieId);

        if (getMovies.length === 0) {
          toast.error(`Nothing was found for the request "${movieId}"`);
        }
        setMovies(getMovies);
      } catch (error) {
        toast.error('Something went wrong. Try the request again');
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };
    loadMovies();
  }, [movieId]);

  return (
    <>
      <main>
        <SearchForm setSearchParams={setSearchParams}></SearchForm>
        {isLoading && <Loader />}
        {movies && <MovieList movies={movies}></MovieList>}
      </main>
    </>
  );
};

export default Movies;
