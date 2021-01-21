import React from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";


  return (
    <PopupWithForm
      name="info"
      title="Пользователь успешно зарегистрирован!"
      isOpen={isOpen}
      onClose={onClose}
      onLogin={onLogin}
    >
      <p className="popup__info">

          Войти
        </button>
      </p>
    </PopupWithForm>
  );
}

export default InfoPopup;
