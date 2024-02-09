import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Box } from "./styled-components/StyledComponents";
import { Comments, ArticleRating, Errors } from "../index";
import { fetchSingleArticle } from "../../utils/utils";

export default function SingleArticle({ user, error, setError }) {
  const [voteCounter, setVoteCounter] = useState(0);
  const [currentArticle, setCurrentArticle] = useState([]);
  const { articleId } = useParams();

  useEffect(() => {
    fetchSingleArticle(articleId)
      .then((res) => {
        setCurrentArticle(res[0]);
      })
      .catch((err) => {
        setError(err);
      });
  }, [articleId]);

  if (error) {
    const message = error.response.data.msg;
    return <Errors message={message} status={error.response.status} />;
  }
  return (
    <>
      <Box>
        <div className="article__header">
          <h3>{currentArticle.title}</h3>
          <p>{currentArticle.topic}</p>
          <p>{currentArticle.author}</p>
          <p>{moment(currentArticle.created_at).format("MMMM Do YYYY")}</p>
          <img src={currentArticle.article_img_url} />
        </div>
        <div className="body">
          <p>{currentArticle.body}</p>
        </div>
        <div className="articles__box-footer">
          <FontAwesomeIcon icon={faCommentAlt} size="lg" />{" "}
          {currentArticle.comment_count}{" "}
          <FontAwesomeIcon
            icon={+currentArticle.votes < 0 ? faHeartCrack : faHeart}
          />{" "}
          {voteCounter + currentArticle.votes}
        </div>
        <ArticleRating
          currentArticle={currentArticle}
          setVoteCounter={setVoteCounter}
          voteCounter={voteCounter}
        />
      </Box>
      <Box>
        <Comments user={user} />
      </Box>
    </>
  );
}
