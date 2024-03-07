import React, { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = () => {
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
        },
        {
          nameRU: "Темный рыцарь",
          director: "Кристофер Нолан",
          year: 2008,
          genre: "Боевик",
          rating: 9.0,
          duration: 152,
          image: "https://avatars.mds.yandex.net/i?id=d5ec6fdc9dedec2d5b28fd6cb45e405b5e2f2de5-7745047-images-thumbs&n=13"
        },
        {
          nameRU: "Межзвездный",
          director: "Кристофер Нолан",
          year: 2014,
          genre: "Научная фантастика",
          rating: 8.6,
          duration: 169,
          image: "https://avatars.mds.yandex.net/i?id=4e2153ed8f7be4babcd4806aec8db089825c0570-10384273-images-thumbs&n=13"
        },
        {
          nameRU: "Криминальное чтиво",
          director: "Квентин Тарантино",
          year: 1994,
          genre: "Криминал",
          rating: 8.9,
          duration: 154,
          image: "https://i.pinimg.com/originals/96/d7/98/96d79804f99e9dae0f97df33cd9a77af.jpg"
        },
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
        },
        {
          nameRU: "Темный рыцарь",
          director: "Кристофер Нолан",
          year: 2008,
          genre: "Боевик",
          rating: 9.0,
          duration: 152,
          image: "https://avatars.mds.yandex.net/i?id=d5ec6fdc9dedec2d5b28fd6cb45e405b5e2f2de5-7745047-images-thumbs&n=13"
        },
        {
          nameRU: "Межзвездный",
          director: "Кристофер Нолан",
          year: 2014,
          genre: "Научная фантастика",
          rating: 8.6,
          duration: 169,
          image: "https://avatars.mds.yandex.net/i?id=4e2153ed8f7be4babcd4806aec8db089825c0570-10384273-images-thumbs&n=13"
        },
        {
          nameRU: "Криминальное чтиво",
          director: "Квентин Тарантино",
          year: 1994,
          genre: "Криминал",
          rating: 8.9,
          duration: 154,
          image: "https://i.pinimg.com/originals/96/d7/98/96d79804f99e9dae0f97df33cd9a77af.jpg"
        },
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
        },
        {
          nameRU: "Темный рыцарь",
          director: "Кристофер Нолан",
          year: 2008,
          genre: "Боевик",
          rating: 9.0,
          duration: 152,
          image: "https://avatars.mds.yandex.net/i?id=d5ec6fdc9dedec2d5b28fd6cb45e405b5e2f2de5-7745047-images-thumbs&n=13"
        },
        {
          nameRU: "Межзвездный",
          director: "Кристофер Нолан",
          year: 2014,
          genre: "Научная фантастика",
          rating: 8.6,
          duration: 169,
          image: "https://avatars.mds.yandex.net/i?id=4e2153ed8f7be4babcd4806aec8db089825c0570-10384273-images-thumbs&n=13"
        },
        {
          nameRU: "Криминальное чтиво",
          director: "Квентин Тарантино",
          year: 1994,
          genre: "Криминал",
          rating: 8.9,
          duration: 154,
          image: "https://i.pinimg.com/originals/96/d7/98/96d79804f99e9dae0f97df33cd9a77af.jpg"
        },
        {
          nameRU: "Побег из Шоушенка",
          director: "Фрэнк Дарабонт",
          year: 1994,
          genre: "Драма",
          rating: 9.3,
          duration: 142,
          image: "https://www.film.ru/sites/default/files/movies/posters/1613230-1436375.jpg"
        },
        {
          nameRU: "Темный рыцарь",
          director: "Кристофер Нолан",
          year: 2008,
          genre: "Боевик",
          rating: 9.0,
          duration: 152,
          image: "https://avatars.mds.yandex.net/i?id=d5ec6fdc9dedec2d5b28fd6cb45e405b5e2f2de5-7745047-images-thumbs&n=13"
        },
        {
          nameRU: "Межзвездный",
          director: "Кристофер Нолан",
          year: 2014,
          genre: "Научная фантастика",
          rating: 8.6,
          duration: 169,
          image: "https://avatars.mds.yandex.net/i?id=4e2153ed8f7be4babcd4806aec8db089825c0570-10384273-images-thumbs&n=13"
        },
        {
          nameRU: "Криминальное чтиво",
          director: "Квентин Тарантино",
          year: 1994,
          genre: "Криминал",
          rating: 8.9,
          duration: 154,
          image: "https://i.pinimg.com/originals/96/d7/98/96d79804f99e9dae0f97df33cd9a77af.jpg"
        },
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
        },
        {
          nameRU: "Темный рыцарь",
          director: "Кристофер Нолан",
          year: 2008,
          genre: "Боевик",
          rating: 9.0,
          duration: 152,
          image: "https://avatars.mds.yandex.net/i?id=d5ec6fdc9dedec2d5b28fd6cb45e405b5e2f2de5-7745047-images-thumbs&n=13"
        },
        {
          nameRU: "Межзвездный",
          director: "Кристофер Нолан",
          year: 2014,
          genre: "Научная фантастика",
          rating: 8.6,
          duration: 169,
          image: "https://avatars.mds.yandex.net/i?id=4e2153ed8f7be4babcd4806aec8db089825c0570-10384273-images-thumbs&n=13"
        },
        {
          nameRU: "Криминальное чтиво",
          director: "Квентин Тарантино",
          year: 1994,
          genre: "Криминал",
          rating: 8.9,
          duration: 154,
          image: "https://i.pinimg.com/originals/96/d7/98/96d79804f99e9dae0f97df33cd9a77af.jpg"
        },
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
        },
        {
          nameRU: "Темный рыцарь",
          director: "Кристофер Нолан",
          year: 2008,
          genre: "Боевик",
          rating: 9.0,
          duration: 152,
          image: "https://avatars.mds.yandex.net/i?id=d5ec6fdc9dedec2d5b28fd6cb45e405b5e2f2de5-7745047-images-thumbs&n=13"
        },
        {
          nameRU: "Межзвездный",
          director: "Кристофер Нолан",
          year: 2014,
          genre: "Научная фантастика",
          rating: 8.6,
          duration: 169,
          image: "https://avatars.mds.yandex.net/i?id=4e2153ed8f7be4babcd4806aec8db089825c0570-10384273-images-thumbs&n=13"
        },
        {
          nameRU: "Криминальное чтиво",
          director: "Квентин Тарантино",
          year: 1994,
          genre: "Криминал",
          rating: 8.9,
          duration: 154,
          image: "https://i.pinimg.com/originals/96/d7/98/96d79804f99e9dae0f97df33cd9a77af.jpg"
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
    <main className="movies">
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList movies={movies} />
      )}
    </main>
  );
};

export default Movies;