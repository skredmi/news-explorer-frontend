import "./NotFound.css";
import React from "react";
import NotFoundImage from "../../images/not-found.svg";

function NotFound() {
  return (
    <section className="not-found">
      <img
        src={NotFoundImage}
        alt="Картинка лупы"
        className="not-found__image"
      />
      <h2 className="not-found__title">Ничего не найдено</h2>
      <p className="not-found__text">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}

export default NotFound;
