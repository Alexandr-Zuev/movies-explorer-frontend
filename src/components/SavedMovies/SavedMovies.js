import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { api } from '../../utils/MainApi';

const SavedMovies = ({ loggedIn }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [keyword, setKeyword] = useState('');
  const [shortFilmChecked, setShortFilmChecked] = useState(false);
  const [likedMovies, setLikedMovies] = useState([]);

  const handleDeleteFromFavorites = (deletedMovieId) => {
    setMovies(movies => movies.filter(movie => movie.movieId !== deletedMovieId));
    setLikedMovies(likedMovies => likedMovies.filter(movie => movie.movieId !== deletedMovieId));
  };

  useEffect(() => {
    const fetchLikedMovies = async () => {
      try {
        const likedMoviesData = await api.getMovies();
        setLikedMovies(likedMoviesData);
        setMovies(likedMoviesData);
      } catch (error) {
        console.error('Ошибка получения данных:', error.message);
      }
    };
    fetchLikedMovies();
  }, []);

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const filteredMoviesData = likedMovies.filter(movie =>
        (movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(keyword.toLowerCase()))
        );
        if (shortFilmChecked) {
          const shortFilms = filteredMoviesData.filter(movie => movie.duration <= 40);
          setMovies(shortFilms);
        } else {
          setMovies(filteredMoviesData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Ошибка при фильтрации данных:', error);
        setIsLoading(false);
        setError('Во время запроса произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    };

    if (keyword.trim() !== '') {
      fetchFilteredMovies();
    }
  }, [keyword, shortFilmChecked, likedMovies, movies]);

  const handleSearch = (keyword) => {
    setKeyword(keyword);
  };

  const handleCheckboxChange = () => {
    setShortFilmChecked(!shortFilmChecked);
  };

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm onSearch={handleSearch} onChecked={shortFilmChecked} handleCheckboxChange={handleCheckboxChange} />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {error && <p className="movies__error">{error}</p>}
            {movies.length === 0 ? (
              <p className="movies__error">Ничего не найдено</p>
            ) : (
              <MoviesCardList movies={movies} shortFilmChecked={shortFilmChecked} likedMovies={likedMovies} onDeleteFromFavorites={handleDeleteFromFavorites} />
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;