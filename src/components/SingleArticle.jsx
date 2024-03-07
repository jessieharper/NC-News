import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { Box, CommentBox } from "./styled-components/StyledComponents";
import { Comments, ArticleRating, Errors } from "../index";
import "./ArticleCard.css";
import { fetchSingleArticle } from "../../utils/utils";

export default function SingleArticle({ user, error, setError }) {
  const [voteCounter, setVoteCounter] = useState(0);
  const [currentArticle, setCurrentArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { articleId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(articleId)
      .then((res) => {
        setCurrentArticle(res[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [articleId]);

  console.log(isLoading);

  if (error) {
    const message = error.response.data.msg;
    return <Errors message={message} status={error.response.status} />;
  }
  return (
    <>
      <Box>
        <div className="article__header">
          <h3>{currentArticle.title || <Skeleton />}</h3>
          <div className="articles__box--metadata">
            <div className="articles__box--author">
              {!isLoading ? (
                <>
                  <p>Posted by {currentArticle.author}</p>
                  <p>
                    {moment(currentArticle.created_at).format("MMMM Do YYYY")}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <Skeleton />
                  </p>
                  <p>
                    <Skeleton />
                  </p>
                </>
              )}
            </div>
            <div className="articles__box--topic">
              {!isLoading ? (
                <Link
                  to={`/articles/topics/${
                    currentArticle.topic || <Skeleton />
                  }`}
                >
                  Topic: {currentArticle.topic}
                </Link>
              ) : (
                <Skeleton />
              )}
            </div>
          </div>
        </div>
        <div className="article__body">
          <img src={currentArticle.article_img_url} />
          <p>{currentArticle.body || <Skeleton count={10} />}</p>
        </div>
        <div className="single-article--footer">
          <div className="single-article--footer--comments">
            {!isLoading ? (
              <>
                <FontAwesomeIcon icon={faCommentAlt} size="lg" />{" "}
                {currentArticle.comment_count}{" "}
                <FontAwesomeIcon
                  icon={+currentArticle.votes < 0 ? faHeartCrack : faHeart}
                  size="lg"
                />{" "}
                {voteCounter + currentArticle.votes}
              </>
            ) : (
              <Skeleton />
            )}
          </div>

          {!isLoading ? (
            <ArticleRating
              currentArticle={currentArticle}
              setVoteCounter={setVoteCounter}
              voteCounter={voteCounter}
            />
          ) : (
            <Skeleton />
          )}
        </div>
      </Box>
      <CommentBox>
        <Comments user={user} />
      </CommentBox>
    </>
  );
}
