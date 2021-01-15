import React from "react";
import "./Error.css";

function Error() {
  return (
    <div className="error-page">
      <p className="error-page__text">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
    </div>
  );
}

export default Error;
