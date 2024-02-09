import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Box } from "./styled-components/StyledComponents";

export default function ArticleCard({ article }) {
  return (
    <Box id={article.article_id}>
      <Link to={`/${article.article_id}`}>
        <h3>{article.title}</h3>
      </Link>
      <br />
      <p>Posted by {article.author}</p>
      <img src={article.article_img_url} />
      <div className="articles__box-footer">
        <div className="articles__box-footer--comments">
          <FontAwesomeIcon icon={faComment} size="lg" /> {article.comment_count}
        </div>
        <div className="articles__box-footer--votes">
          <FontAwesomeIcon icon={faThumbsUp} /> {article.votes}
        </div>
      </div>
    </Box>
  );
}
