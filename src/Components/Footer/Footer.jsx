import './Footer.css';
import Logop from '../Header/images/Logo.png'

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Logop} alt="" />
          </div>
          <div className="footer-info">
            <p className="footer-address">
              <span className="footer-icon">📍</span> Toshkent shahri Yashnobod tumani Mo‘lj.Sergeli-4 bekat
            </p>
            <p className="footer-phone">
              <span className="footer-icon">📞</span> <a href="tel:+998940593434">+998 94 059 3434</a>
            </p>
          </div>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              Facebook <span className="footer-arrow">➔</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              Instagram <span className="footer-arrow">➔</span>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              Telegram <span className="footer-arrow">➔</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;