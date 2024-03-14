import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { DropdownListItem } from "./styled-components/StyledComponents";

export default function NavBar() {
  const [tripleBarStatus, setTripleBarStatus] = useState("dropdown-list");
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const handleClick = () => {
    setTripleBarStatus((currStatus) => {
      return currStatus === "dropdown-list"
        ? "dropdown-list show"
        : "dropdown-list";
    });
  };

  return (
    <nav className="navbar">
      <div className="header__title">
        <Link to="/articles">
          <h1>NCN</h1>
        </Link>
      </div>
      {isLargeScreen ? (
        <div className="header__links">
          <ul>
            <li className="header__search-bar--container">
              <SearchBar />
            </li>

            <li className="header__navbar--link">
              <Link to="/">HOME</Link>
            </li>
            <li className="header__navbar--link">
              <Link to="/articles">ARTICLES</Link>
            </li>
            <li className="header__navbar--icon">
              <FontAwesomeIcon icon={faCircleUser} size="2xl" />
            </li>
          </ul>
        </div>
      ) : (
        <nav>
          <button onClick={handleClick} className="header__navbar--button">
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </button>
          <div className="dropdown header">
            <ul onClick={handleClick} className={`${tripleBarStatus} header`}>
              <DropdownListItem className="header__navbar--link">
                <Link to="/">HOME</Link>
              </DropdownListItem>
              <DropdownListItem className="header__navbar--link">
                <Link to="/articles">ARTICLES</Link>
              </DropdownListItem>
              <DropdownListItem className="header__navbar--link">
                <Link to="#">PLACEHOLDER</Link>
              </DropdownListItem>
              <DropdownListItem className="header__navbar--link">
                <Link to="#">PLACEHOLDER</Link>
              </DropdownListItem>
            </ul>
          </div>
        </nav>
      )}
    </nav>
  );
}
