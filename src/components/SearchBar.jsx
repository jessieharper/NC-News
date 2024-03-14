import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { search } from "../../utils/utils";
import { DropdownListItem } from "./styled-components/StyledComponents";
import { SearchResults } from "../index";

export default function SearchBar() {
  const [listDisplay, setListDisplay] = useState("dropdown-list");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleChange = (e) => {
    search(e.target.value).then((result) => {
      setSearchResults(result);
    });
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
      <div className="dropdown">
        <div id="drop-text" className="dropdown-text" onClick={handleClick}>
          <span>Articles</span>
          <FontAwesomeIcon id="icon" icon={faChevronDown} />
        </div>
        <ul className={listDisplay}>
          <DropdownListItem>Articles</DropdownListItem>
          <DropdownListItem>Users</DropdownListItem>
          <DropdownListItem>Topics</DropdownListItem>
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
        />
      </div>
    </section>
  );
}
