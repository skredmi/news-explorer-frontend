import React, { useState } from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onLogin, onSignUp, errorMessage }) {
  const [data, setData] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [validationMessage, setIsValidationMessage] = useState({
    email: "",
    password: "",
  });

   function handleChange(event) {
    const { name, value } = event.target;
    setData({
      ...data,
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { password, email } = data;

    if (!email || !password) {
      return;
    }
    onLogin(password, email);
    setData({ email: "", password: "" });
  };

  React.useEffect(() => {
    setData({ email: "", password: "" });
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
        value={data.email}
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
        value={data.password}
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
      <span id="error-message" className="popup__error-message popup__error-message_active">{errorMessage}</span>
      <button
        type="submit"
        className={`${isValid.email && isValid.password ? "popup__button-save" : "popup__button-save popup__button-save_disabled"}`}
      >
        Войти
      </button>
      <p className="popup__text">
        или
        <button type="button" className="popup__button-link" onClick={onSignUp}>
          Зарегистрироваться
        </button>
      </p>
    </PopupWithForm>
  );
}

export default Login;
