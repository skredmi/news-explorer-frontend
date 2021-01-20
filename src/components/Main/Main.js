import React, { useState, useEffect, useContext } from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import { CurrentUserContext } from "../../context/CurrentUserContext";

function Main({
  loggedIn,
  keyword,
  articles,
  articleSaved,
  onArticleDelete,
  handleArticleSave,
  findSavedArticles,
  onSignUp,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [showButton, setShowButton] = useState(false);
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    setShowCards(articles.slice(0, 3));
    if (articles.length <= 3) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [articles]);

  function handleShowButtonClick() {
    setShowCards(articles.slice(0, showCards.length + 3));
    if (showCards.length >= articles.length - 3) {
      setShowButton(false);
    }
  }

  return (
    <main className="main">
      <h2 className="main__title">Результаты поиска</h2>
      <NewsCardList>
        {showCards.map((article, key) => (
          <NewsCard
            keyword={keyword}
            tag={keyword}
            sourceLink={article.url}
            image={article.urlToImage}
            title={article.title}
            date={article.publishedAt}
            text={article.description}
            source={article.source.name}
            loggedIn={loggedIn}
            key={key}
            handleArticleSave={handleArticleSave}
            findSavedArticles={findSavedArticles}
            currentUser={currentUser}
            onArticleDelete={onArticleDelete}
            articleSaved={articleSaved}
            articles={articles}
            onSignUp={onSignUp}
            article={article}
          />
        ))}
      </NewsCardList>
      {showButton && (
        <button className="main__button" onClick={handleShowButtonClick}>
          Показать еще
        </button>
      )}
    </main>
  );
}

export default Main;
