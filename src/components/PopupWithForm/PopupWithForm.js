import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  onSubmit,
}) {
  return (
    <section className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <form className="popup__container" onSubmit={onSubmit} noValidate>
        <button
          onClick={onClose}
          className="popup__button-close"
          type="button"
        />
        <h3 className="popup__title">{title}</h3>
        {children}
      </form>
    </section>
  );
}

export default PopupWithForm;
