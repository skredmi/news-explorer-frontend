import React from "react";
import logoGitHub from "../../images/github.svg";
import logoFacebook from "../../images/facebook.svg";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </p>
      <div className="footer__links">
        <nav className="footer__nav">
          <ul className="footer__nav-links">
            <li>
              <a href="/" className="footer__nav-link">
                Главная
              </a>
            </li>
            <li>
              <a
                href="https://praktikum.yandex.ru/"
                className="footer__nav-link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__social-icons-links">
          <a
            href="https://github.com/"
            className="footer__social-icons-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logoGitHub}
              className="footer__social-icon"
              alt="Иконка GitHub"
            />
          </a>
          <a
            href="https://www.facebook.com/"
            className="footer__social-icons-link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={logoFacebook}
              className="footer__social-icon"
              alt="Иконка Facebook"
            />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Footer;
