import React, { useState, useEffect } from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";


  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    name: false,
  });
  const [validationMessage, setIsValidationMessage] = useState({
    email: "",
    password: "",
    name: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    });
  };


    setIsValidationMessage({ email: "", password: "", name: "" });
    setIsValid({ email: false, password: false, name: false });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="signup"
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__label">Email</label>
      <input
        className="popup__input"
        onChange={handleChange}

        id="email-input"
        type="email"
        name="email"
        placeholder="Введите почту"
        required
      />
      <span
        id="email-input-error"
        className={`popup__input-error ${
          !isValid.name && "popup__input-error_active"
        }`}
      >
        {validationMessage.email}
      </span>
      <label className="popup__label">Пароль</label>
      <input
        className="popup__input"
        onChange={handleChange}

        id="password-input"
        placeholder="Введите пароль"
        type="password"
        name="password"
        required
      />
      <span
        id="password-input-error"
        className="popup__input-error popup__input-error_active"
      >
        {validationMessage.password}
      </span>
      <label className="popup__label">Имя</label>
      <input
        className="popup__input"
        onChange={handleChange}

        id="name-input"
        placeholder="Введите имя"
        type="text"
        name="name"
        required
      />
      <span
        id="name-input-error"
        className="popup__input-error popup__input-error_active"
      >
        {validationMessage.name}
      </span>

        Зарегистрироваться
      </button>
      <p className="popup__text">
        или
        <button type="button" className="popup__button-link" onClick={onSignIn}>
          Войти
        </button>
      </p>
    </PopupWithForm>
  );
}

export default Register;
