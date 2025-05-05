import "./Contact.css";
import Image from "./images/person-in-white-chemical-protection-suit-holding-sprayer-with-disinfectant-chemicals-to-stop-spreading-highly-contagious-virus_342744-937-removebg-preview 1.png";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: t("faq-question-1"),
      answer: t("faq-answer-1"),
    },
    {
      question: t("faq-question-2"),
      answer: t("faq-answer-2"),
    },
    {
      question: t("faq-question-3"),
      answer: t("faq-answer-3"),
    },
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="faq-section">
            <h2 className="faq-title" id="Faq-section">
              {t("faq-title")}
            </h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {openIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="contact-bottom" id="Contact-section">
            <div className="contact-left">
              <h3 className="contact-left-title">{t("contact-left-title")}</h3>
              <form>
                <input
                  type="text"
                  placeholder={t("contact-input-placeholder-name")}
                  className="contact-input"
                />
                <div className="phone-input">
                  <span className="phone-code">+998</span>
                  <input
                    type="tel"
                    placeholder={t("contact-input-placeholder-phone")}
                    className="contact-input phone-number"
                  />
                </div>
                <label className="contact-checkbox">
                  <input type="checkbox" />
                  {t("contact-checkbox-label")}
                </label>
                <button type="submit" className="contact-button">
                  {t("contact-button")}
                </button>
              </form>
            </div>
            <div className="contact-right">
              <p className="contact-right-text">
                {t("contact-right-text")}
              </p>
              <img src={Image} alt="Contact" className="contact-right-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;