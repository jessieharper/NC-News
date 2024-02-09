import { useEffect, useState } from "react";
import { ArticleCard, Errors } from "../index";
import { fetchAllArticles } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

export default function AllArticles({
  setAllArticles,
  allArticles,
  error,
  setError,
}) {
  const [sortMenu, setSortMenu] = useState("dropdown_menu");
  const [searchParam, setSearchParam] = useState("");
  const [order, setOrder] = useState("");
  const [sortByText, setSortByText] = useState("Sort by");

  useEffect(() => {
    fetchAllArticles("sort_by", searchParam, order)
      .then((res) => {
        setAllArticles(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [searchParam, order]);

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

  if (error) {
    const message = error.response.data.msg;
    return <Errors message={message} status={error.response.status} />;
  }

  return (
    <section className="articles">
      <header className="articles__header">
        <h2>All Articles</h2>

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
      </header>

      {allArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}
