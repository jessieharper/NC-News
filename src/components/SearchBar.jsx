import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { searchArticles, searchTopics, searchUsers } from "../../utils/utils";
import { DropdownListItem } from "./styled-components/StyledComponents";
import { SearchResults } from "../index";

export default function SearchBar() {
  const [listDisplay, setListDisplay] = useState("dropdown-list");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchCategory, setSearchCategory] = useState("Articles");

  const handleChange = (e) => {
    switch (searchCategory) {
      case "Topics":
        searchTopics(e.target.value + ":*").then((result) => {
          setSearchResults(result);
        });
        break;
      case "Users":
        searchUsers(e.target.value + ":*").then((result) => {
          setSearchResults(result);
        });
        break;
      default:
        searchArticles(e.target.value + ":*").then((result) => {
          setSearchResults(result);
        });
    }
    if (e.target.value === "") setIsSearchActive(false);
    else setIsSearchActive(true);
  };

  const handleClick = () => {
    setListDisplay((currDisplay) => {
      return currDisplay === "dropdown-list search-menu"
        ? "dropdown-list show search-menu"
        : "dropdown-list search-menu";
    });
  };

  return (
    <section className="header__search-bar">
      <div className="dropdown search">
        <div id="drop-text" className="dropdown-text" onClick={handleClick}>
          <span>{searchCategory}</span>
          <FontAwesomeIcon id="icon" icon={faChevronDown} />
        </div>
        <ul className={listDisplay}>
          <DropdownListItem
            onClick={() => {
              handleClick();
              setSearchCategory("Articles");
            }}
          >
            Articles
          </DropdownListItem>
          {/* <DropdownListItem
            onClick={() => {
              handleClick();
              setSearchCategory("Users");
            }}
          >
            Users
          </DropdownListItem> */}
          <DropdownListItem
            onClick={() => {
              handleClick();
              setSearchCategory("Topics");
            }}
          >
            Topics
          </DropdownListItem>
        </ul>
      </div>

      <div className="search-box" onChange={(e) => handleChange(e)}>
        <input id="search-input" type="text" placeholder="Search..." />
        <FontAwesomeIcon
          id="magnifying-glass"
          icon={faMagnifyingGlass}
          size="lg"
        />
        <SearchResults
          searchResults={searchResults}
          isSearchActive={isSearchActive}
          searchCategory={searchCategory}
        />
      </div>
    </section>
  );
}
