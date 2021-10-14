import { useState } from "react";

import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";
import { SignInButton } from "../../SignInButton";

import "./index.scss";

export function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-left">
          <Link to="./home" className="navbar-logo">
            Alternative HairCuts
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-menu" id={showLinks ? "hidden" : ""}>
            {MenuItems.map((item, index) => {
              return (
                <li className="navbar-item" key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <Link to="/login">
              <SignInButton />
            </Link>
          </div>
        </div>
        <button
          className="navbar-button-toggle"
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </button>
      </div>
    </header>
  );
}
