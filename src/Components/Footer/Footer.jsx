import "./Footer.css";
import Logop from "../Header/images/Logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logop} alt="Logo" />
          </div>
          <div className="footer-info">
            <p className="footer-address">
              <span className="footer-icon">📍</span> {t("footer-address")}
            </p>
            <p className="footer-phone">
              <span className="footer-icon">📞</span>{" "}
              <a href={`tel:${t("footer-phone")}`}>{t("footer-phone")}</a>
            </p>
          </div>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {t("footer-social-facebook")}{" "}
              <span className="footer-arrow">➔</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {t("footer-social-instagram")}{" "}
              <span className="footer-arrow">➔</span>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              {t("footer-social-telegram")}{" "}
              <span className="footer-arrow">➔</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
