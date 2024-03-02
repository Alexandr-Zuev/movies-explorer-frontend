import React, { useState } from 'react';

const MovieCard = ({movie}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <article className="movie-card">
      <img src={movie.image} alt={movie.nameRU} className="movie-card__poster" />
      <div className="movie-card__info">
        <h2 className="movie-card__title">{movie.nameRU}</h2>
        <button 
          className={`movie-card__like-button ${isLiked ? 'movie-card__like-button_active' : ''}`}
          onClick={handleLikeClick}
        ></button>
      </div>
      <div className="movie-card__line"></div>
      <p className="movie-card__duration">{movie.duration}м</p>
    </article>
  );
};

export default MovieCard;