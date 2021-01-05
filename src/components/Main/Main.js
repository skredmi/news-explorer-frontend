import React, { useState, useEffect } from "react";
import "./Main.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import NewsCard from "../NewsCard/NewsCard";
import { cards } from "../../utils/cards";

function Main() {
  const [showButton, setShowButton] = useState(false);
  const [showCards, setShowCards] = useState([]);

  useEffect(() => {
    setShowCards(cards.slice(0, 3));
    if (cards.length <= 3) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);

  function handleShowButtonClick() {
    setShowCards(cards.slice(0, showCards.length + 3));
    if (showCards.length >= cards.length - 3) {
      setShowButton(false);
    }
  }

  return (
    <main className="main">
      <h2 className="main__title">Результаты поиска</h2>
      <NewsCardList>
        {showCards.map((cards) => (
          <NewsCard
            tag={cards.tag}
            image={cards.image}
            date={cards.date}
            title={cards.title}
            text={cards.text}
            source={cards.source}
            sourceLink={cards.sourceLink}
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
