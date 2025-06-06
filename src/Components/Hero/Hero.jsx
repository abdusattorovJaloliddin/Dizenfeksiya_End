import "./Hero.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import Image1 from "./images/Group 1000004543.png";
import Image2 from "./images/side-view-of-hand-with-surgical-glove-holding-ablution-bottle_23-2148571830 (1).png";
import Image3 from "./images/side-view-of-hand-with-surgical-glove-holding-ablution-bottle_23-2148571830.png";
import Person from "./images/WnYJyJjWq3U 1.png";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">{t("hero-title")}</h1>
            <p className="hero-text">{t("hero-text")}</p>
            <span className="hero-images-span">
              <img className="hero-img1" src={Image3} alt="" />
              <img className="hero-im2" src={Image2} alt="" />
              <img className="hero-img3" src={Image1} alt="" />
            </span>
            <button className="hero-button">
              {t("btn")} <RiArrowRightUpLine />
            </button>
          </div>
          <div className="hero-left">
            <img src={Person} alt="" className="hero-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
