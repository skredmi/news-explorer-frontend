import React from "react";
import "./SavedNewsHeader.css";

function SavedNewsHeader() {
  return (
    <div className="news-header">
      <h2 className="news-header__title">Сохраненные статьи</h2>
      <p className="news-header__text">Грета, у вас 5 сохранённых статей</p>
      <p className="news-header__keywords">
        По ключевым словам: <span className="news-header__tag">Природа, Тайга </span>и{" "}
        <span className="news-header__tag"> 2-м другим.</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
