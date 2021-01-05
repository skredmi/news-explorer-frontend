import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import "./Header.css";

function Header({ onLogin, loggedIn }) {
    const location = useLocation();
    return (
        <header className={`header ${location.pathname === '/saved-news' && 'header_black'}`}>
            <Link to="/" className={`header__logo ${location.pathname === '/saved-news' && 'header__logo_black'}`}>NewsExplorer</Link>
            <Navigation onLogin={onLogin} loggedIn={loggedIn} />
        </header>
    )
}

export default Header;
