import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchTrandMovies } from 'utils/api';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadTrendMovies = async () => {
      try {
        setIsLoading(true);
        const getTrendMovies = await fetchTrandMovies();
        setTrendMovies(getTrendMovies);
      } catch (error) {
        toast.error('Something went wrong. Try the request again');
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrendMovies();
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        {isLoading && <Loader />}
        {trendMovies && <MovieList movies={trendMovies}></MovieList>}
      </main>
    </>
  );
};

export default Home;
