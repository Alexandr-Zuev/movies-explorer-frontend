import React, { useState } from 'react';
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

export const NavTabContext = React.createContext();

const App = () => {
  const [isNavTabWindowOpen, setIsNavTabWindowOpen] = useState(false);

  const openNavTabWindow = () => {
    setIsNavTabWindowOpen(true);
  };

  const closeNavTabWindow = () => {
    setIsNavTabWindowOpen(false);
  };

  return (
    <div className="page">
      <NavTabContext.Provider value={{ openNavTabWindow, closeNavTabWindow }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <NavTabWindow isOpen={isNavTabWindowOpen} onClose={closeNavTabWindow} />
      </NavTabContext.Provider>
    </div>
  );
};

export default App;
