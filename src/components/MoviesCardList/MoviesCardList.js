import React, { useState } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies }) => {
  const [visibleMovies, setVisibleMovies] = useState(12); 
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMore = () => {
    setVisibleMovies(movies.length);
    setShowLoadMore(false);
  };

  return (
    <section className="movies-card-list">
      
      {movies.slice(0, visibleMovies).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
      {showLoadMore && movies.length > visibleMovies && (
        <button onClick={handleLoadMore} className="movies-card-list__button-more">Ещё</button>
      )}
    </section>
  );
};

export default MoviesCardList;