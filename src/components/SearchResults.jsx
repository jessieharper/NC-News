import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { DropdownListItem } from "./styled-components/StyledComponents";

export default function SearchResults({ searchResults, isSearchActive }) {
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
              <DropdownListItem onClick={handleClick} key={result.article_id}>
                <Link to={`/articles/${result.article_id}`}>
                  {result.title} by {result.author}
                </Link>
              </DropdownListItem>
            );
          })}
        </ul>
      )}
    </section>
  );
}
