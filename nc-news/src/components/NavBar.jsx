import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const [tripleBarStatus, setTripleBarStatus] = useState("dropdown_menu");
  const handleClick = () => {
    setTripleBarStatus((currStatus) => {
      return currStatus === "dropdown_menu header"
        ? "dropdown_menu header open"
        : "dropdown_menu header";
    });
  };

  return (
    <nav className="navbar">
      <div className="header__title">
        <Link to="/">
          <h1>NCN</h1>
        </Link>
      </div>
      <div className="header__links">
        <ul>
          <li className="header__navbar--link">
            <Link to="#">PROFILE</Link>
          </li>
          <li className="header__navbar--link">
            <Link to="/">ARTICLES</Link>
          </li>
          <li className="header__navbar--link">
            <Link to="#">ABOUT</Link>
          </li>
          <li className="header__navbar--link">
            <Link to="#">SIGN OUT</Link>
          </li>
        </ul>
      </div>
      <button onClick={handleClick} className="header__navbar--button">
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </button>

      <div onClick={handleClick} className={tripleBarStatus}>
        <li className="header__navbar--link">
          <Link to="#">EXAMPLE</Link>
        </li>
        <li className="header__navbar--link">
          <Link to="/">ARTICLES</Link>
        </li>
        <li className="header__navbar--link">
          <Link to="#">EXAMPLE</Link>
        </li>
        <li className="header__navbar--link">
          <Link to="#">EXAMPLE</Link>
        </li>
      </div>
    </nav>
  );
}
