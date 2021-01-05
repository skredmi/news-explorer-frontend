import React, { useState } from "react";
import "../PopupWithForm/PopupWithForm.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({ isOpen, onClose, onSubmit, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isValid, setIsValid] = useState({ email: false, password: false });
  const [validationMessage, setIsValidationMessage] = useState({
    email: "",
    password: "",
  });

  function handleInputEmailChange(event) {
    const { name, value } = event.target;
    setEmail(value);
    setIsValid({
      ...isValid,
      [name]: event.target.validity.valid,
    });
    setIsValidationMessage({
      ...validationMessage,
      [name]: event.target.validationMessage,
    });
  }

  function handleInputPasswordChange(event) {
    const { name, value } = event.target;
    setPassword(value);
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
    setPassword("");
    setEmail("");
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
        onChange={handleInputEmailChange}
        value={email}
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
        onChange={handleInputPasswordChange}
        value={password}
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
      <button
        type="submit"
        className="popup__button-save"
      >
        Войти
      </button>
      <p className="popup__text">
        или
        <button type="button" className="popup__button-link" onClick={onRegister}>
          Зарегистрироваться
        </button>
      </p>
    </PopupWithForm>
  );
}

export default Login;
