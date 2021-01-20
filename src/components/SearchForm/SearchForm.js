import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (!searchKeyword) {
      setErrorMessage("Нужно ввести ключевое слово");
      return;
    } else {
      onSearch(searchKeyword);
      setErrorMessage("");
    }
  }

  function handleChangeKeyword(evt) {
    setSearchKeyword(evt.target.value);
  }

  return (
    <form className="search-form" noValidate onSubmit={handleSearchSubmit}>
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__description">
        Находите самые свежие статьи на любую тему и сохраняйте в своём личном
        кабинете.
      </p>
      <div className="search-form__container">
        <input
          className="search-form__input"
          placeholder="Введите тему новости"
          id="input-error"
          required
          onChange={handleChangeKeyword}
          value={searchKeyword || ""}
        />
        <span id="search-input-error" className="search-form__input-error">
          {errorMessage}
        </span>
        <button className="search-form__button" type="submit">
          Искать
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
