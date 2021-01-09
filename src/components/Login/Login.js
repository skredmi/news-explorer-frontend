import React, { useState } from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onSubmit, onRegister }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [validationMessage, setIsValidationMessage] = useState({
    email: "",
    password: "",
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
    setUser({ email: "", password: "" });
    setIsValidationMessage({ email: "", password: "" });
    setIsValid({ email: false, password: false });
  }, [isOpen]);

  return (
    <PopupWithForm
      name="signin"
      title="Вход"
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
      <button type="submit" className={`${isValid.email && isValid.password ? "popup__button-save" : "popup__button-save popup__button-save_disabled"}`}>
        Войти
      </button>
      <p className="popup__text">
        или
        <button
          type="button"
          className="popup__button-link"
          onClick={onRegister}
        >
          Зарегистрироваться
        </button>
      </p>
    </PopupWithForm>
  );
}

export default Login;
