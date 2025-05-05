import './Header.css';
import Logo from './images/Logo.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation(); // i18n header qismida select o'zgarishi uchun kerak ekan 

  console.log(i18n);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-container">
          <a href="#" className="header-links">
            <img className="header-logo" src={Logo} alt="Logo" />
          </a>
          <ul className={`header-list ${isMenuOpen ? 'active' : ''}`}>
            <li className="header-item">
              <a href="#Service-section" className="header-link" onClick={toggleMenu}>
                {t('service')}
              </a>
            </li>
            <li className="header-item">
              <a href="#About-section" className="header-link" onClick={toggleMenu}>
                {t('about')}
              </a>
            </li>
            <li className="header-item">
              <a href="#Faq-section" className="header-link" onClick={toggleMenu}>
                {t('faq')}
              </a>
            </li>
            <li className="header-item">
              <a href="#Contact-section" className="header-link" onClick={toggleMenu}>
                {t('contact')}
              </a>
            </li>
          </ul>
          <div className="header-right">
            <span className="header-span">
              <button className="header-button">{t('login')}</button>
              <select
                name="language"
                id="language"
                className="header-select"
                value={i18n.language}
                onChange={handleLanguageChange}
              >
                <option value="uz">UZ</option> 
                <option value="ru">RU</option> 
                <option value="en">EN</option> 
              </select>
            </span>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;