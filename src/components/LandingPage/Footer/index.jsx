import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";

import "./index.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-container">
          <div className="footer-left">
            <a className="footer-logo" href="/">
              <span>Alternative HairCuts</span>
            </a>
            <div className="footer-social">
              <a href="https://www.facebook.com/" className="footer-icon">
                <AiFillFacebook />
              </a>
              <a href="https://twitter.com/" className="footer-icon">
                <AiFillTwitterSquare />
              </a>
              <a href="https://www.instagram.com/" className="footer-icon">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="https://www.facebook.com/" className="footer-link">
                Home
              </a>
              <a href="https://www.facebook.com/" className="footer-link">
                Contato
              </a>
              <a href="https://www.facebook.com/" className="footer-link">
                Blog
              </a>
              <a href="https://www.facebook.com/" className="footer-link">
                Carreira
              </a>
              <a href="https://www.facebook.com/" className="footer-link">
                Suporte
              </a>
            </div>
            <p className="footer-copyright">
              © Alternative HairCuts. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
