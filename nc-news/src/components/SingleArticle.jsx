import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentAlt, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Box } from "./styled-components/Box";

export default function SingleArticle({ currentArticle }) {
  return (
    <Box>
      <div className="article__header">
        <h3>{currentArticle.title}</h3>
        <p>{currentArticle.topic}</p>
        <p>{currentArticle.author}</p>
        <p>{currentArticle.created_at}</p>
        <img src={currentArticle.article_img_url} />
      </div>
      <div className="body">
        <p>{currentArticle.body} Body</p>
      </div>
      <div className="articles__box-footer">
        <FontAwesomeIcon icon={faCommentAlt} size="lg" />{" "}
        {currentArticle.comment_count}
      </div>
      <div className="articles__box-footer--votes">
        <FontAwesomeIcon icon={faThumbsUp} /> {currentArticle.votes}
      </div>
    </Box>
  );
}
