import React from 'react';
import { Link } from 'react-router-dom';
import NavTabProfile from '../NavTabProfile/NavTabProfile';

const NavTabWindow = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  const profileStyles = {
    display: isOpen ? 'flex' : 'initial'
  };

  return (
    <div className={`nav-tab-window ${isOpen ? 'nav-tab-window__isopen' : ''}`}>
      <div className="nav-tab-window__links">
        <button className='nav-tab-window__close-button' onClick={onClose}></button>
        <Link to="/" className="nav-tab-window__link" onClick={handleClose}>Главная</Link>
        <Link to="/movies" className="nav-tab-window__link" onClick={handleClose}>Фильмы</Link>
        <Link to="/saved-movies" className="nav-tab-window__link" onClick={handleClose}>Сохранённые фильмы</Link>
        <Link to="/profile" className="nav-tab-window__link" onClick={handleClose}><NavTabProfile style={profileStyles} /></Link>
      </div>
    </div>
  );
};

export default NavTabWindow;