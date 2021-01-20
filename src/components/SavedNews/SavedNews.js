import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({
  articles,
  keyword,
  loggedIn,
  onArticleDelete,
  articleSaved,
  handleArticleSave,
  currentUser,
}) {
  return (
    <section className="saved-news">
      <NewsCardList>
        {articleSaved.map((article, key) => (
          <NewsCard
            tag={article.keyword}
            sourceLink={article.link}
            image={article.image}
            title={article.title}
            date={article.date}
            text={article.text}
            source={article.source}
            _id={article._id}
            loggedIn={loggedIn}
            key={key}
            keyword={keyword}
            articles={articles}
            onArticleDelete={onArticleDelete}
            handleArticleSave={handleArticleSave}
            articleSaved={articleSaved}
            currentUser={currentUser}
            myArticle={article}
          />
        ))}
      </NewsCardList>
    </section>
  );
}

export default SavedNews;
