import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import SearchForm from "../SearchForm/SearchForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import InfoPopup from "../InfoPopup/InfoPopup";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleLoginPopupClick() {
    setIsRegisterPopupOpen(false);
    setIsLoginPopupOpen(true);
  }

  function handleRegisterPopupClick() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(true);
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    setIsLoginPopupOpen(false);
    setLoggedIn(true);
  }

  function closeAllPopups() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(false);
  }

  useEffect(() => {
    const handleClosePopupEsc = (evt) => {
      const ESC = 27;
      if (evt.keyCode === ESC) {
        closeAllPopups();
      }
    };
    document.addEventListener("keydown", handleClosePopupEsc);
    const handleClosePopupOverlay = (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        closeAllPopups();
      }
    };
    document.addEventListener("click", handleClosePopupOverlay);
    return () => {
      document.removeEventListener("keydown", handleClosePopupEsc);
      document.addEventListener("click", handleClosePopupOverlay);
    };
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/saved-news">
          <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} />
          <SavedNewsHeader />
          <SavedNews />
          <Footer />
        </Route>
        <Route path="/">
          <div className="header-image">
            <Header onLogin={handleLoginPopupClick} loggedIn={loggedIn} />
            <SearchForm />
          </div>
          <Main />
          <About />
          <Footer />
          <Login
            isOpen={isLoginPopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleLoginSubmit}
            onRegister={handleRegisterPopupClick}
          />
          <Register
            isOpen={isRegisterPopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleRegisterSubmit}
            onLogin={handleLoginPopupClick}
          />
          <InfoPopup
            isOpen={isInfoTooltipOpen}
            onClose={closeAllPopups}
            onLogin={handleLoginPopupClick}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
