import { Link } from "react-router-dom";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__shortcut">
        <h3>Na skróty:</h3>
        <ul className="footer__navigation">
          <li>
            <Link to="/">Strona główna</Link>
          </li>
          <li>
            <Link to="/energia">Energia Elektryczna</Link>
          </li>
          <li>
            <Link to="/gaz">Gaz</Link>
          </li>
          <li>
            <Link to="/onas">O nas</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
      <div className="footer__company-info">
        <h3>Dane kontaktowe:</h3>
        <div className="company-info__phone">
          <span>
            <AiOutlinePhone />
          </span>
          <p>605 271 432</p>
        </div>
        <div className="company-info__mail">
          <span>
            <AiOutlineMail />
          </span>
          <p>kontakt@obniz-rachunki.pl</p>
        </div>
        <div className="adress">
          <p>Kocia Siec Oleksii Tsymbaliuk</p>
          <p>ul. Krzyżówki 1/39</p>
          <p>03-193 Warszawa</p>
          <p>NIP: 5272717482</p>
          <p>REGON: 389920207</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
