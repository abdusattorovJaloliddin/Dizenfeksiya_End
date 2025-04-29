import "./Contact.css";
import Image from "./images/person-in-white-chemical-protection-suit-holding-sprayer-with-disinfectant-chemicals-to-stop-spreading-highly-contagious-virus_342744-937-removebg-preview 1.png"; // Rasmni moslashtirishingiz kerak
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Contact() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Kursdan nima topaman",
      answer:
        "Bu bir notka kayfiyday kapy darsga qatnasha olmasangiz, darsdan so’ng qurhingizga zoom zapisi tashlab beriladi",
    },
    {
      question: "Kursdan nima topaman",
      answer:
        "Bu bir notka kayfiyday kapy darsga qatnasha olmasangiz, darsdan so’ng qurhingizga zoom zapisi tashlab beriladi",
    },
    {
      question: "Kursdan nima topaman",
      answer:
        "Bu bir notka kayfiyday kapy darsga qatnasha olmasangiz, darsdan so’ng qurhingizga zoom zapisi tashlab beriladi",
    },
  ];

  return (
    <div className="contact">
      <div className="container">
        <div className="contact-container">
          <div className="faq-section">
            <h2 className="faq-title" id="Faq-section">
              FAQ
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
              <h3 className="contact-left-title">Ma'lumotingiz qoldiring</h3>
              <form>
                <input
                  type="text"
                  placeholder="Ism"
                  className="contact-input"
                />
                <div className="phone-input">
                  <span className="phone-code">+998</span>
                  <input
                    type="tel"
                    placeholder=""
                    className="contact-input phone-number"
                  />
                </div>
                <label className="contact-checkbox">
                  <input type="checkbox" />
                  Maxfiylik/siyosati
                </label>
                <button type="submit" className="contact-button">
                  Yozilish
                </button>
              </form>
            </div>
            <div className="contact-right">
              <p className="contact-right-text">
                Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar
                talaygina
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
