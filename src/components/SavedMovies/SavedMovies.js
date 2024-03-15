import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const SavedMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const mockMovies = [
        {
          nameRU: "Начало",
          director: "Кристофер Нолан",
          year: 2010,
          genre: "Научная фантастика",
          rating: 8.8,
          duration: 148,
          image: "https://avatars.mds.yandex.net/i?id=6f44bd6a2558e3e566a3b54cdda33d0866813a4f-10465630-images-thumbs&n=13"
        },
        {
          nameRU: "Побег из Шоушенка",
          director: "Фрэнк Дарабонт",
          year: 1994,
          genre: "Драма",
          rating: 9.3,
          duration: 142,
          image: "https://www.film.ru/sites/default/files/movies/posters/1613230-1436375.jpg"
        }
      
      ];
      setMovies(mockMovies);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (keyword) => {
    console.log('Поиск фильмов по запросу', keyword);
  };

  return (
    <main className="saved-movies">
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} />
      )}
    </main>
  );
};

export default SavedMovies;