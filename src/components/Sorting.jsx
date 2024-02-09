import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Sorting({ order, setOrder, setSearchParam }) {
  const [sortMenu, setSortMenu] = useState("dropdown_menu");
  const [sortByText, setSortByText] = useState("Sort by");

  const handleSortClick = (e, param) => {
    setSortMenu((currStatus) => {
      return currStatus === "dropdown_menu"
        ? "dropdown_menu sort open"
        : "dropdown_menu";
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
    <>
      <button onClick={handleSortClick} className="articles__header--btn">
        {sortByText} <FontAwesomeIcon icon={faSort} size="lg" />
      </button>

      <div id="sort_btns" className={sortMenu}>
        <ul>
          <button onClick={(e) => handleSortClick(e, "created_at")}>
            <li>Date</li>
          </button>
          <button onClick={(e) => handleSortClick(e, "author")}>
            <li>Author</li>
          </button>
          <button onClick={(e) => handleSortClick(e, "title")}>
            <li>Title</li>
          </button>
        </ul>
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
    </>
  );
}
