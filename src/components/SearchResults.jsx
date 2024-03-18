import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DropdownListItem } from "./styled-components/StyledComponents";

export default function SearchResults({
  searchResults,
  isSearchActive,
  searchCategory,
}) {
  const [isListOpen, setIsListOpen] = useState(false);

  const handleClick = () => {
    setIsListOpen(false);
  };

  useEffect(() => {
    setIsListOpen(() => {
      return isSearchActive ? true : false;
    });
  }, [searchResults]);

  return (
    <section>
      {isListOpen && (
        <ul className="dropdown-list show search">
          {isSearchActive && searchResults.length === 0 && (
            <DropdownListItem>No results</DropdownListItem>
          )}
          {searchResults.map((result) => {
            return (
              <DropdownListItem
                onClick={handleClick}
                key={
                  searchCategory === "Articles"
                    ? result.article_id
                    : searchCategory === "Topics"
                    ? result.slug
                    : result.username
                }
              >
                {searchCategory === "Articles" && (
                  <Link to={`/articles/${result.article_id}`}>
                    {result.title} by {result.author}
                  </Link>
                )}
                {searchCategory === "Topics" && (
                  <Link to={`/articles/topics/${result.slug}`}>
                    #{result.slug}
                  </Link>
                )}
                {searchCategory === "Users" && <>{result.username}</>}
              </DropdownListItem>
            );
          })}
        </ul>
      )}
    </section>
  );
}
