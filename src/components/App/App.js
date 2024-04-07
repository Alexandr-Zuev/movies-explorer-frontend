import React, { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import NavTabWindow from '../NavTabWindow/NavTabWindow';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import NavTabContext from '../../contexts/NavTabContext.js';
import { api } from '../../utils/MainApi.js';

const App = () => {
  const [isNavTabWindowOpen, setIsNavTabWindowOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleOut = () => {
    setLoggedIn(false);
  };

  const openNavTabWindow = () => {
    setIsNavTabWindowOpen(true);
  };

  const closeNavTabWindow = () => {
    setIsNavTabWindowOpen(false);
  };

  useEffect(() => {
    if (loggedIn) {
      api
        .getUserInfo()
        .then(userInfo => {
          setCurrentUser (userInfo);
        })
        .catch(error => {
          console.error('Ошибка при получении информации о пользователе:', error);
        });
    }
  }, [loggedIn]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <NavTabContext.Provider value={{ openNavTabWindow, closeNavTabWindow }}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header loggedIn={loggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={<ProtectedRouteElement component={Movies} loggedIn={loggedIn} />}
            />
            <Route
              path="/saved-movies"
              element={<ProtectedRouteElement component={SavedMovies} loggedIn={loggedIn} />}
            />
            <Route
              path="/profile"
              element={<ProtectedRouteElement component={Profile} loggedIn={loggedIn} loggedOut={handleOut} />}
            />

            <Route path="/signin" element={<Login handleLogin={handleLogin} />} />
            <Route path="/signup" element={<Register handleLogin={handleLogin} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <NavTabWindow isOpen={isNavTabWindowOpen} onClose={closeNavTabWindow} />
        </NavTabContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;