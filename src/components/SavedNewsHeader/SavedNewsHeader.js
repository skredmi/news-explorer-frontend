import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ articleSaved }) {
  const currentUser = useContext(CurrentUserContext);

  const keywordArray = articleSaved.map((c) => (c = c.keyword));
  const keywordsArr = [...new Set(keywordArray)]
    .map((value) => {
      const item = {};
      item.keyword = value;
      item.quantity = keywordArray.filter((str) => str === value).length;
      return item;
    })
    .sort((a, b) => b.quantity - a.quantity)
    .map((item) => item.keyword);

  function SavedArticleText(number) {
    if (number >= 5 || number === 0) {
      return "сохраненных статей";
    } else if (number > 1 && number < 5) {
      return "сохраненные статьи";
    } else if (number === 1) {
      return "сохраненная статья";
    }
  }

  function keywordArticleText(number) {
    if (number >= 2) {
      return "По ключевым словам";
    } else if (number < 2) {
      return "По ключевому слову";
    }
  }

  function keywordOtherArticleText(number) {
    if (number >= 4) {
      return "-м другим";
    } else {
      return "";
    }
  }

  function handleFirstLetterKeyword(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  }

  const firstKeyword = `${handleFirstLetterKeyword(keywordsArr[0])}`;
  const secondKeyword = `${handleFirstLetterKeyword(keywordsArr[1])}`;
  const thirdKeyword = `${handleFirstLetterKeyword(keywordsArr[2])}`;

  const keys = `${
    keywordsArr.length !== 0
      ? `news-header__keywords`
      : `news-header__keywords_none`
  }`;
  const span = `${
    keywordsArr.length > 3 ? `news-header__tag` : `news-header__tag_none`
  }`;
  const keyword = `${
    keywordsArr.length === 3
      ? ` ${firstKeyword}, ${secondKeyword}, ${thirdKeyword}`
      : ` ${firstKeyword}, ${secondKeyword}`
  }`;

  return (
    <div className="news-header">
      <h2 className="news-header__title">Сохраненные статьи</h2>
      <p className="news-header__text">{`${currentUser.name}, у вас ${
        articleSaved.length
      } ${SavedArticleText(articleSaved.length)}`}</p>
      <p className={keys}>
        {keywordArticleText(keywordsArr.length)}
        <span className="news-header__tag">
          {keywordsArr.length < 2 ? ` ${firstKeyword}` : `${keyword}`}
        </span>
        <span className={span}>
          {" "}
          и {keywordsArr.length - 2}
          {keywordOtherArticleText(keywordsArr.length)}
        </span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;
