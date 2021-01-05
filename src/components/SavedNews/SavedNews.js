import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";
import Image1 from "../../images/image1.png";

function SavedNews() {
  return (
    <section className="saved-news">
      <NewsCardList>
        <NewsCard
          tag="Погода"
          image={Image1}
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы."
          source="Афиша"
          sourceLink="https://ria.ru"
        />
        <NewsCard
          tag="Природа"
          image={Image1}
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы."
          source="Афиша"
          sourceLink="https://ria.ru"
        />
        <NewsCard
          tag="Природа"
          image={Image1}
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного из местных чудес природы."
          source="Афиша"
          sourceLink="https://ria.ru"
        />
      </NewsCardList>
    </section>
  );
}

export default SavedNews;
