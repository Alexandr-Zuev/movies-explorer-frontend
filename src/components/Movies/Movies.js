import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { movieapi } from '../../utils/MoviesApi';
import { api } from '../../utils/MainApi';

const Movies = ({ loggedIn }) => {

  const storedKeyword = localStorage.getItem('searchKeywordMovies');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [keyword, setKeyword] = useState(storedKeyword !== null ? storedKeyword : '');
  const [likedMovies, setLikedMovies] = useState([]);
  const [shortFilmChecked, setShortFilmChecked] = useState(
    localStorage.getItem('checkboxStateMovies') === 'true' ? true : false
  );

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('moviesSearchResults')) || [];
    setMovies(storedMovies);
  }, [shortFilmChecked]);

  useEffect(() => {
    localStorage.setItem('checkboxStateMovies', shortFilmChecked);
  }, [shortFilmChecked]);

  useEffect(() => {
    const fetchLikedMovies = async () => {
      try {
        const likedMoviesData = await api.getMovies();
        setLikedMovies(likedMoviesData);
      } catch (error) {
        console.error('Ошибка получения данных:', error.message);
      }
    };

    fetchLikedMovies();
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    if (!keyword.trim()) {
      setError('Нужно ввести ключевое слово');
      setIsLoading(false);
      return;
    }
    movieapi
      .getInitialFilms()
      .then(movies => {
        const filteredMovies = movies.filter(movie =>
        (movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(keyword.toLowerCase()))
        );
        setMovies(filteredMovies);
        setIsLoading(false);
        setError('');
        localStorage.setItem('moviesSearchResults', JSON.stringify(filteredMovies));
        localStorage.setItem('searchKeywordMovies', keyword);
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
        setIsLoading(false);
        setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      });
  }, [isLoading, keyword, shortFilmChecked]);

  const handleSearch = (keyword) => {
    setIsLoading(true);
    setKeyword(keyword);
  };

  const handleCheckboxChange = () => {
    setShortFilmChecked(prevState => !prevState);
  };

  return (<>
    <Header loggedIn={loggedIn} />
    <main className="movies">
      <SearchForm onSearch={handleSearch} onChecked={shortFilmChecked} handleCheckboxChange={handleCheckboxChange} searchKeyword={storedKeyword} />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {error && <p className="movies__error">{error}</p>}
          {movies.length === 0 ? (
            <p className="movies__error">Ничего не найдено</p>
          ) : (
            <MoviesCardList movies={movies} shortFilmChecked={shortFilmChecked} likedMovies={likedMovies} />
          )}
        </>
      )}
    </main>
    <Footer />
  </>
  );
};

export default Movies;
