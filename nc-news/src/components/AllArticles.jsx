import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Box } from "./styled-components/Box";
import { fetchSingleArticle } from "../../utils/utils";

export default function AllArticles({ allArticles, setCurrentArticle }) {
  const handleClick = (article) => {
    fetchSingleArticle(article.article_id).then((res) => {
      setCurrentArticle(res[0]);
    });
  };

  return (
    <section className="articles">
      <h2>Articles</h2>
      {allArticles.map((article) => {
        return (
          <Box
            key={article.article_id}
            id={article.article_id}
            onClick={() => handleClick(article)}
          >
            <Link to="/SingleArticle">
              <h3>{article.title}</h3>
            </Link>
            <p>Posted by {article.author}</p>
            <img src={article.article_img_url} />
            <div className="articles__box-footer">
              <div className="articles__box-footer--comments">
                <FontAwesomeIcon icon={faComment} size="lg" />{" "}
                {article.comment_count}
              </div>
              <div className="articles__box-footer--votes">
                <FontAwesomeIcon icon={faThumbsUp} /> {article.votes}
              </div>
            </div>
          </Box>
        );
      })}
    </section>
  );
}
