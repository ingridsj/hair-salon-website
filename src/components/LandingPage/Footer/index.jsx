import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { ScheduleButton } from "../../ScheduleButton";

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
              <a href="#" className="footer-icon">
                <AiFillFacebook />
              </a>
              <a href="#" className="footer-icon">
                <AiFillTwitterSquare />
              </a>
              <a href="#" className="footer-icon">
                <AiOutlineInstagram />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                Contato
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
              <a href="#" className="footer-link">
                Carreira
              </a>
              <a href="#" className="footer-link">
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
