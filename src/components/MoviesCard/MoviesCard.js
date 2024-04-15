import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../utils/MainApi.js';

const MovieCard = ({ movie, likedMovies, onDeleteFromFavorites }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMovieLiked, setIsMovieLiked] = useState(false);

  useEffect(() => {
    const checkIsLiked = (movie) => {
      const result = likedMovies.some(likedMovie => likedMovie.movieId === movie.id);
      return result;
    };
  
    setIsMovieLiked(checkIsLiked(movie));
  }, [movie, likedMovies]);

  const handleCardClick = () => {
    if (movie.trailerLink) {
      window.open(movie.trailerLink, '_blank');
    } else {
      console.error('Ссылка на трейлер фильма отсутствует');
    }
  };

  const handleLikeClick = async () => {
    const movieLoad = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id
    };

    try {
      if (isMovieLiked) {
        await api.deleteMovieFromFavorites(movie.id);
        setIsMovieLiked(false);
      } else {
        await api.addMovieToFavorites(movieLoad);
        setIsMovieLiked(true);
      }
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  };

  const handleDeleteClick = async (movieToDelete) => {
    try {
      await api.deleteMovieFromFavorites(movieToDelete.movieId);
      onDeleteFromFavorites(movieToDelete.movieId);
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  };

  return (
    <article className="movie-card">
      <img
        src={pathname === '/saved-movies' ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
        alt={movie.nameRU}
        className="movie-card__poster"
        onClick={handleCardClick}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.nameRU}</h3>
        {pathname === '/saved-movies' ? (
          <button
            className="movie-card__delete-button"
            onClick={() => handleDeleteClick(movie)}
            type="button"
          ></button>
        ) : (
          <button
            className={`movie-card__like-button ${isMovieLiked ? 'movie-card__like-button_active' : ''}`}
            onClick={handleLikeClick}
            type="button"
          ></button>
        )}
      </div>
      <p className="movie-card__duration">{`${Math.floor(movie.duration / 60)}ч ${movie.duration % 60}м`}</p>
    </article>
  );
};

export default MovieCard;