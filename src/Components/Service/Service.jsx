import "./Service.css";
import { MdOutlineSecurity } from "react-icons/md";
import Image from "./images/Group (1).png";
import Image2 from "./images/obrazovaniye_s 2.png";
import Image3 from "./images/Group (2).png";
import Image4 from "./images/Group (3).png";
import { useTranslation } from "react-i18next";

function Service() {
  const { t } = useTranslation();
  return (
    <div className="service" id="Service-section">
      <div className="container">
        <div className="service-container">
          <h3 className="service-title">{t("service-title")}</h3>
          <p className="service-text">{t("service-text")}</p>
          <ul className="service-list">
            <li className="service-item">
              <p className="service-text-title">{t("service-text-title-1")}</p>
              <blockquote>{t("service-blockquote-1")}</blockquote>
              <p className="service-dars">{t("service-dars-1")}</p>
              <img src={Image} alt="" className="service-img" />
            </li>
            <li className="service-item">
              <p className="service-text-title">{t("service-text-title-2")}</p>
              <blockquote>{t("service-blockquote-2")}</blockquote>
              <p className="service-dars">{t("service-dars-2")}</p>
              <img src={Image3} alt="" className="service-img" />
            </li>
            <li className="service-item">
              <p className="service-text-title">{t("service-text-title-3")}</p>
              <blockquote>{t("service-blockquote-3")}</blockquote>
              <p className="service-dars">{t("service-dars-3")}</p>
              <img src={Image4} alt="" className="service-img" />
            </li>
          </ul>
          <div className="service-bottom">
            <div className="service-left">
              <img className="service-left-img" src={Image2} alt="" />
            </div>
            <div className="service-right">
              <MdOutlineSecurity className="service-right-icon" />
              <p className="service-right-text">{t("service-right-text")}</p>
              <button className="service-right-button">
                {t("service-right-button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
