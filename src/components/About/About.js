import React from "react";
import "./About.css";

function About() {
  return (
    <div className="author">
      <div className="author__image" />
      <div className="author__text">
        <h3 className="author__title">Об авторе</h3>
        <p className="author__info">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </div>
  );
}

export default About;
