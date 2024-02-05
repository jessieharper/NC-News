import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar({ setTripleBarStatus }) {
  const handleClick = () => {
    setTripleBarStatus((currStatus) => {
      return currStatus === "header--active"
        ? "header--inactive"
        : "header--active";
    });
  };

  return (
    <nav className="header__navbar">
      <button onClick={handleClick} className="header__navbar--button">
        <FontAwesomeIcon icon={faBars} size="2xl" />
      </button>
      <ul className="header__navbar--button-content">
        <li className="header__navbar--link">
          <Link to="/profile">PROFILE</Link>
        </li>
        <li className="header__navbar--link">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="header__navbar--link">
          <Link to="/">SIGN OUT</Link>
        </li>
      </ul>
    </nav>
  );
}
