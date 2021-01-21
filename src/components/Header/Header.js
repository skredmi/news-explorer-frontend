import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import "./Header.css";


function Header({ onSignIn, loggedIn, onLogOut, name }) {

    const location = useLocation();
    return (
        <header className={`header ${location.pathname === '/saved-news' && 'header_black'}`}>
            <Link to="/" className={`header__logo ${location.pathname === '/saved-news' && 'header__logo_black'}`}>NewsExplorer</Link>
            <Navigation onSignIn={onSignIn} loggedIn={loggedIn} onLogOut={onLogOut} name={name} />
        </header>
    )
}

export default Header;
