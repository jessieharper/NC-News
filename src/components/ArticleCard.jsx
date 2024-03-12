import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Box } from "./styled-components/StyledComponents";
import "./ArticleCard.css";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ArticleCard({ article, isLoading }) {
  return (
    <Box id={article.article_id}>
      <Link to={`/articles/${article.article_id}`}>
        <h3>{article.title}</h3>
        <section className="articles__box--metadata">
          <p>Posted by {article.author}</p>
          <p className="articles__box--date">
            {moment(article.created_at).format("MMM Do YYYY, h:mm a")}
          </p>
        </section>
        <img src={article.article_img_url} />

        <div className="articles__box--footer container">
          <div className="articles__box--footer">
            {!isLoading ? (
              <>
                <div className="comment-count">
                  <FontAwesomeIcon icon={faComment} size="xl" />{" "}
                  {article.comment_count}
                </div>
                <div className="vote-count">
                  <FontAwesomeIcon icon={faThumbsUp} size="xl" />{" "}
                  {article.votes}
                </div>
              </>
            ) : (
              <Skeleton />
            )}
          </div>
        </div>
      </Link>
    </Box>
  );
}
