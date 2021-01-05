import React from "react";
import "./Preloader.css";
function Preloader() {
  return (
    <div className="circle-preloader__conteiner">
      <i className="circle-preloader"></i>
      <p className="circle-preloader__text">Идет поиск новостей...</p>
    </div>
  );
}

export default Preloader;
