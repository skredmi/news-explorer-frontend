import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

function NewsCard({ tag, image, date, title, text, source, sourceLink }) {
  const [isMark, setIsMark] = useState(false);
  const location = useLocation();

  function handleSetMark() {
    if (isMark) {
      setIsMark(false);
    } else {
      setIsMark(true);
    }
  }

  return (
    <div className="card">
      <div className="card__container">
        <div className="card__image-container">
          {location.pathname === "/saved-news" && (
            <button type="button" className="card__delete-button">
              <span className="card__button-tooltip">
                Убрать из сохранённых
              </span>
            </button>
          )}
          {location.pathname === "/" && (
            <button
              type="button"
              className={`${
                isMark ? "card__save-button_active" : "card__save-button"
              }`}
              onClick={handleSetMark}
            >
              <span className="card__button-tooltip">
                Войдите, чтобы сохранять статьи
              </span>
            </button>
          )}
          {tag && <div className="card__tag">{tag}</div>}
          <a
            href={sourceLink}
            target="_blank"
            rel="noreferrer"
            className="card__source-link"
          >
            <img className="card__image" src={image} alt={title} />
          </a>
        </div>
        <p className="card__date">{date}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{text}</p>
      </div>
      <p className="card__source">{source}</p>
    </div>
  );
}

export default NewsCard;
