import React, { useState } from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register({ isOpen, onClose, onSubmit, onLogin }) {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
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
    setUser({
      ...user,
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

  React.useEffect(() => {
    setUser({ email: "", password: "", name: "" });
    setIsValidationMessage({ email: "", password: "", name: "" });
    setIsValid({ email: false, password: false, name: false });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="signup"
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <label className="popup__label">Email</label>
      <input
        className="popup__input"
        onChange={handleChange}
        value={user.email}
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
        value={user.password}
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
        value={user.name}
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
      <button type="submit" className={`${isValid.email && isValid.password && isValid.name ? "popup__button-save" : "popup__button-save popup__button-save_disabled"}`}>
        Зарегистрироваться
      </button>
      <p className="popup__text">
        или
        <button type="button" className="popup__button-link" onClick={onLogin}>
          Войти
        </button>
      </p>
    </PopupWithForm>
  );
}

export default Register;
