import React, { useState, useEffect } from 'react';
import MovieCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ movies, shortFilmChecked, likedMovies, onDeleteFromFavorites }) => {
  const [visibleMovies, setVisibleMovies] = useState(getInitialVisibleMovies());
  const [showLoadMore, setShowLoadMore] = useState(true);

  function getInitialVisibleMovies() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) return 16;
    else if (screenWidth > 954 && screenWidth < 1280) return 12;
    else if (screenWidth >= 750 && screenWidth <= 954) return 8;
    else return 5;
  }

  useEffect(() => {
    function handleResize() {
      setVisibleMovies(getInitialVisibleMovies());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setVisibleMovies(getInitialVisibleMovies());
  }, [movies]);

  const handleLoadMore = () => {
    setVisibleMovies(prevVisibleMovies => prevVisibleMovies + getLoadMoreIncrement());
    if (visibleMovies >= movies.length) {
      setShowLoadMore(false);
    }
  };

  function getLoadMoreIncrement() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) return 4;
    else if (screenWidth >= 954 && screenWidth < 1280) return 3;
    else return 2;
  }

  const filteredMovies = shortFilmChecked
    ? movies.filter(movie => movie.duration <= 40)
    : movies;

  return (
    <section className="movies-card-list">
      {filteredMovies.length === 0 ? (
        <p className="movies__error">Ничего не найдено</p>
      ) : (
        <>
          {filteredMovies.slice(0, visibleMovies).map(movie => (
            <MovieCard key={movie.id} movie={movie} likedMovies={likedMovies} onDeleteFromFavorites={onDeleteFromFavorites} />
          ))}
          {showLoadMore && filteredMovies.length > visibleMovies && (
            <button
              type="button"
              onClick={handleLoadMore}
              className="movies-card-list__button-more"
            >
              Ещё
            </button>
          )}
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
