import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({
  tag,
  image,
  title,
  date,
  text,
  source,
  loggedIn,
  sourceLink,
  keyword,
  _id,
  articleSaved,
  findSavedArticles,
  onArticleDelete,
  article,
  myArticle,
  onSignUp,
}) {
  const [isMark, setIsMark] = useState(false);
  const location = useLocation();

  function handleClickSaveArticle() {
    findSavedArticles({
      keyword: keyword,
      link: sourceLink,
      image: image,
      title: title,
      date: date,
      text: text,
      source: source,
      article,
      myArticle,
    });
  }

  function handleDelete() {
    onArticleDelete(_id);
  }

  useEffect(() => {
    if (articleSaved) {
      setIsMark(articleSaved.find((c) => c.title === title));
    }
  }, [articleSaved, title]);

  function changeFormatDate(date) {
    let newDate = new Date(date);
    const month = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];
    return `${newDate.getDate()} ${
      month[newDate.getMonth()]
    }, ${newDate.getFullYear()}`;
  }

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__image-container">
          {location.pathname === "/saved-news" && (
            <button
              type="button"
              className="card__delete-button"
              onClick={handleDelete}
            >
              <span className="card__button-tooltip">
                Убрать из сохранённых
              </span>
            </button>
          )}
          {location.pathname === "/" && (
            <button
              type="button"
              className={`card__save-button ${
                isMark ? "card__save-button_active" : ""
              }`}
              onClick={() => {
                if (!loggedIn) {
                  onSignUp();
                } else {
                  handleClickSaveArticle();
                }
              }}
            >
              {!loggedIn && (
                <span className="card__button-tooltip">
                  Войдите, чтобы сохранять статьи
                </span>
              )}
            </button>
          )}
          {loggedIn && location.pathname === "/saved-news" && (
            <div className="card__tag">{tag}</div>
          )}
          <a
            href={sourceLink}
            target="_blank"
            rel="noreferrer"
            className="card__source-link"
          >
            <img className="card__image" src={image} alt={title} />
          </a>
        </div>
        <p className="card__date">{changeFormatDate(date)}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
      <p className="card__source">{source}</p>
    </div>
  );
}

export default NewsCard;
