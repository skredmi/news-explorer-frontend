import React from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function InfoPopup({ isOpen, onClose, onLogin }) {
  return (
    <PopupWithForm
      name="info"
      title="Пользователь успешно зарегистрирован!"
      isOpen={isOpen}
      onClose={onClose}
      onLogin={onLogin}
    >
      <p className="popup__info">
        <button type="button" className="popup__button-link" onClick={onLogin}>
          Войти
        </button>
      </p>
    </PopupWithForm>
  );
}

export default InfoPopup;
