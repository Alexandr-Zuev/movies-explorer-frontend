import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <Link to="/movies">Фильмы</Link>
            <Link to="/saved-movies">Сохраненные фильмы</Link>
        </nav>
    );
}

export default Navigation;