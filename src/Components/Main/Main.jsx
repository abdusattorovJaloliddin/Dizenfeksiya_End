import "./Main.css";
import { LuBrain } from "react-icons/lu";
import { RiMenuSearchLine } from "react-icons/ri";
import { FaHandsHelping } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
  return (
    <div className="main" id="About-section">
      <div className="container">
        <div className="main-container">
          <h2 className="main-title">{t("main-title")}</h2>
          <hr />
          <ul className="main-list">
            <li className="main-item">
              <LuBrain className="main-icon" />
              <p className="main-title-text">{t("main-title-text")}</p>
              <blockquote className="main-blockquote">
                {t("main-blockquote")}
              </blockquote>
            </li>
            <li className="main-item">
              <RiMenuSearchLine className="main-icon" />
              <p className="main-title-text">{t("main-title-text")}</p>
              <blockquote className="main-blockquote">
                {t("main-blockquote")}
              </blockquote>
            </li>
            <li className="main-item">
              <RiMenuSearchLine className="main-icon" />
              <p className="main-title-text">{t("main-title-text")}</p>
              <blockquote className="main-blockquote">
                {t("main-blockquote")}
              </blockquote>
            </li>
          </ul>
          <div className="main-bottom">
            <div className="main-bottom-container">
              <h2 className="main-bottom-title">{t("main-bottom-title")}</h2>
              <blockquote className="main-bottom-blockquote">
                {t("main-bottom-blockquote")}
              </blockquote>
              <button className="main-bottom-button">
                {t("main-bottom-button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
