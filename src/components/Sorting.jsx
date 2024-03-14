import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { DropdownListItem } from "./styled-components/StyledComponents";

export default function Sorting({ order, setOrder, setSearchParam }) {
  const [sortMenu, setSortMenu] = useState("dropdown-list");
  const [sortByText, setSortByText] = useState("Sort by");

  const handleSortClick = (e, param) => {
    setSortMenu((currStatus) => {
      return currStatus === "dropdown-list"
        ? "dropdown-list show"
        : "dropdown-list";
    });

    if (param) {
      setSearchParam(param);
      setSortByText(() => {
        return param === "created_at"
          ? "Date"
          : param.slice(0, 1).toUpperCase() + param.slice(1);
      });
    }
  };

  return (
    <section>
      <div className="articles__header--sort">
        <div className="dropdown sort">
          <button className="sort--button" onClick={handleSortClick}>
            {sortByText} <FontAwesomeIcon icon={faSort} size="lg" />
          </button>
          <ul className={`${sortMenu} sort`}>
            <DropdownListItem onClick={(e) => handleSortClick(e, "created_at")}>
              Date
            </DropdownListItem>

            <DropdownListItem onClick={(e) => handleSortClick(e, "author")}>
              Author
            </DropdownListItem>

            <DropdownListItem onClick={(e) => handleSortClick(e, "title")}>
              Title
            </DropdownListItem>
          </ul>
        </div>
      </div>
      <form className="articles__header--toggle">
        <input
          type="radio"
          value="ASC"
          name="toggle"
          checked={order === "ASC"}
          onChange={() => setOrder("ASC")}
        />{" "}
        Asc (A-Z) <FontAwesomeIcon icon={faArrowUp} />{" "}
        <input
          type="radio"
          value="DESC"
          name="toggle"
          checked={order === "DESC"}
          onChange={() => setOrder("DESC")}
        />{" "}
        Desc (Z-A) <FontAwesomeIcon icon={faArrowDown} />
      </form>
    </section>
  );
}
