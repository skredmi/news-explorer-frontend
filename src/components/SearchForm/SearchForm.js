import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form">
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__description">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <form className="search-form__container">
        <input
          className="search-form__input"
          placeholder="Введите тему новости"
          required
        />
        <button className="search-form__button" type="submit">
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
