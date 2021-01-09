import React, { useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation({ onLogin, loggedIn }) {
  const [isHumburgerMenuOpened, setIsHumburgerMenuOpened] = useState(false);
  const location = useLocation();

  function handleHumburgerMenuOpen() {
    setIsHumburgerMenuOpened(true);
  }

  function closeHumburgerMenu() {
    setIsHumburgerMenuOpened(false);
  }

  return (
    <nav className="nav">
      <button
        className={`nav__hamburger ${
          location.pathname === "/saved-news" && "nav__hamburger_black"
        } ${isHumburgerMenuOpened && "nav__hamburger_clicked"}`}
        onClick={handleHumburgerMenuOpen}
      ></button>
      <div
        className={`nav__container ${
          isHumburgerMenuOpened ? "nav__container_opened" : ""
        }`}
      >
        <div className="nav__header">
          {isHumburgerMenuOpened && (
            <Link to="/" className="header__logo">
              NewsExplorer
            </Link>
          )}
          <button
            className="nav__button-close"
            onClick={closeHumburgerMenu}
          ></button>
        </div>
        <ul
          className={`nav__list ${isHumburgerMenuOpened && "nav__list_opened"}`}
        >
          <li
            className={`nav__list-item ${
              location.pathname === "/" && "nav__list-item_active"
            }`}
          >
            <Link
              className={`nav__link ${
                location.pathname === "/saved-news" && "nav__link_black"
              }`}
              to="/"
            >
              Главная
            </Link>
          </li>
          <li
            className={`nav__list-item ${
              location.pathname === "/saved-news" &&
              "nav__list-item_active_black"
            }`}
          >
            {!loggedIn ? (
              ""
            ) : (
              <Link
                className={`nav__link ${
                  location.pathname === "/saved-news" && "nav__link_black"
                }`}
                to="/saved-news"
              >
                Сохраненные статьи
              </Link>
            )}
          </li>
          <li className="nav__list-item">
            {!loggedIn ? (
              <button onClick={onLogin} className="nav__button">
                Авторизоваться
              </button>
            ) : (
              <button
                className={`nav__button ${
                  location.pathname === "/saved-news" && "nav__button_black"
                }`}
              >
                Грета
                <i
                  className={`nav__logout-icon ${
                    location.pathname === "/saved-news" &&
                    "nav_logout-icon_black"
                  }`}
                ></i>
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
