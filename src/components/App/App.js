import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
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
import * as auth from "../../utils/MainApi";
import * as news from "../../utils/NewsApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import Error from "../Error/Error";

function App() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [articleSaved, setArticleSaved] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [keyword, setKeyword] = useState("");
  const [preloader, setPreloader] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  function handleRegister(password, email, name) {
    auth
      .register(password, email, name)
      .then((res) => {
        if (res.data) {
          setIsRegisterPopupOpen(false);
          setIsInfoTooltipOpen(true);
        } else if (res.message) {
          setErrorMessage(res.message);
        } else {
          setErrorMessage("Ошибка сервера. Попробуйте ещё раз!");
        }
      })
      .catch((err) => {
        if (err === 400) {
          console.log("некорректно заполнено одно из полей");
        }
      });
  }

  function handleLogin(password, email) {
    auth
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          history.push("/saved-news");
          setIsLoginPopupOpen(false);
        } else if (data.message) {
          setErrorMessage(data.message);
        } else {
          setErrorMessage("Ошибка сервера. Попробуйте ещё раз!");
        }
      })
      .catch((err) => {
        if (err === 400) {
          console.log("не передано одно из полей");
        } else if (err === 401) {
          console.log("пользователь с email не найден");
        }
      });
  }

  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    auth
      .getContent(token)
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setCurrentUser({ name: res.name, id: res._id });
        }
      })
      .catch((err) => {
        if (err === 401) {
          console.log("Переданный токен некорректен");
        }
      });
  }

  function logOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }

  useEffect(() => {
    tokenCheck();
    const articles = localStorage.getItem("articles")
      ? JSON.parse(localStorage.getItem("articles"))
      : [];
    setArticles(articles);
    const keyword = localStorage.getItem("keyword");
    setKeyword(keyword);
    getSavedArticles();
  }, [loggedIn]);

  function handleSearchNews(keyword) {
    setArticles([]);
    localStorage.removeItem("articles");
    localStorage.removeItem("keyword");
    setPreloader(true);
    setNotFound(false);
    setError(false);
    news
      .getNews(keyword)
      .then((data) => {
        localStorage.setItem("articles", JSON.stringify(data.articles));
        localStorage.setItem("keyword", keyword);
        setArticles(data.articles);
        setKeyword(keyword);
        setPreloader(false);
        setNotFound(false);
        if (data.articles.length === 0) {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  function handleArticleSave({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  }) {
    auth
      .createArticle({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      })
      .then((res) => {
        setArticleSaved([res, ...articleSaved]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleArticleDelete(id) {
    auth
      .deleteArticle(id)
      .then(() => {
        const newArticles = articleSaved.filter((c) => c._id !== id);
        setArticleSaved(newArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getSavedArticles() {
    if (loggedIn) {
      auth
        .getArticles()
        .then((news) => {
          const arrayMyNews = news.filter((c) => c.owner === currentUser.id);
          setArticleSaved(arrayMyNews);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  useEffect(() => {
    getSavedArticles();
  }, [currentUser.id, loggedIn]);

  function findSavedArticles({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    article,
    myArticle,
  }) {
    const mySavedArticle = articleSaved.find((c) => {
      if (myArticle) {
        return c.title === myArticle.title && c.text === myArticle.text;
      }

      if (article) {
        return c.title === article.title && c.text === article.description;
      }
    });

    if (mySavedArticle) {
      handleArticleDelete(mySavedArticle._id);
    } else {
      handleArticleSave({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      });
    }
  }

  function handleLoginPopupClick() {
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsLoginPopupOpen(true);
  }

  function handleRegisterPopupClick() {
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(true);
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
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/saved-news" loggedIn={loggedIn}>
            <Header
              loggedIn={loggedIn}
              onSignIn={handleLoginPopupClick}
              onLogOut={logOut}
            />
            <SavedNewsHeader articleSaved={articleSaved} />
            <SavedNews
              keyword={keyword}
              loggedIn={loggedIn}
              articles={articles}
              articleSaved={articleSaved}
              handleArticleSave={handleArticleSave}
              onArticleDelete={handleArticleDelete}
              getSavedArticles={getSavedArticles}
            />
            <Footer />
          </ProtectedRoute>
          <Route path="/">
            <div className="header-image">
              <Header
                onSignIn={handleLoginPopupClick}
                loggedIn={loggedIn}
                onLogOut={logOut}
              />
              <SearchForm onSearch={handleSearchNews} />
            </div>
            <Main
              keyword={keyword}
              loggedIn={loggedIn}
              articles={articles}
              articleSaved={articleSaved}
              handleArticleSave={handleArticleSave}
              onArticleDelete={handleArticleDelete}
              findSavedArticles={findSavedArticles}
              onSignUp={handleRegisterPopupClick}
            />
            {notFound && <NotFound />}
            {preloader && <Preloader />}
            {error && <Error />}
            <About />
            <Footer />
            <Login
              isOpen={isLoginPopupOpen}
              onClose={closeAllPopups}
              onSignUp={handleRegisterPopupClick}
              onLogin={handleLogin}
              errorMessage={errorMessage}
            />
            <Register
              isOpen={isRegisterPopupOpen}
              onClose={closeAllPopups}
              onSignIn={handleLoginPopupClick}
              onRegister={handleRegister}
              errorMessage={errorMessage}
            />
            <InfoPopup
              isOpen={isInfoTooltipOpen}
              onClose={closeAllPopups}
              onSignIn={handleLoginPopupClick}
            />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/saved-news" /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
