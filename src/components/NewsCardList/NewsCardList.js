import React from "react";
import "./NewsCardList.css";

function NewsCardList({ children }) {
  return <div className="cardList">{children}</div>;
}

export default NewsCardList;
