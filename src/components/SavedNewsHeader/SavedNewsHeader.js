import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./SavedNewsHeader.css";



function SavedNewsHeader({ name }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="news-header">
      <h2 className="news-header__title">Сохраненные статьи</h2>
      <p className="news-header__text">{currentUser.name}, у вас 5 сохранённых статей</p>
      <p className="news-header__keywords">
        По ключевым словам:
        <span className="news-header__tag">Природа, Тайга </span>и
        <span className="news-header__tag"> 2-м другим.</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
