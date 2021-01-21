import React, { useState, useEffect } from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";


  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [validationMessage, setIsValidationMessage] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

      [name]: value,
    });
    setIsValid({
      ...isValid,
      [name]: event.target.validity.valid,
    });
    setIsValidationMessage({
      ...validationMessage,
      [name]: event.target.validationMessage,
    });
  }


    setIsValidationMessage({ email: "", password: "" });
    setIsValid({ email: false, password: false });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="signin"
      title="Вход"
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

        Войти
      </button>
      <p className="popup__text">
        или

          Зарегистрироваться
        </button>
      </p>
    </PopupWithForm>
  );
}

export default Login;
