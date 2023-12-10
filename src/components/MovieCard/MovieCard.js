import { BoxCard } from './MovieCard.styled';

export const MovieCard = ({ movieDetails }) => {
  return (
    <BoxCard>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width="300"
        />
      </div>
      <div>
        <h2>
          {movieDetails.title} ({parseInt(movieDetails.release_date)})
        </h2>
        <p>User score: {movieDetails.vote_average.toFixed(1) * 10}%</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <p>{movieDetails.genres.map(genre => genre.name).join(' ')}</p>
      </div>
    </BoxCard>
  );
};
