import { useState, useEffect } from "react";
import {
  ActiveLikeButton,
  ActiveDislikeButton,
} from "./styled-components/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const likesFromLocalStorage = JSON.parse(
  localStorage.getItem("likedArticles") || "[]"
);
const dislikesFromLocalStorage = JSON.parse(
  localStorage.getItem("dislikedArticles") || "[]"
);

export default function RatingButtonManager({ articleId, setVote }) {
  const [likedArticles, setLikedArticles] = useState(likesFromLocalStorage);
  const [dislikedArticles, setDislikedArticles] = useState(
    dislikesFromLocalStorage
  );
  const [isLikeButtonActive, setIsLikeButtonActive] = useState(
    likedArticles.includes(articleId) ? false : true
  );
  const [isDislikeButtonActive, setIsDislikeButtonActive] = useState(
    dislikedArticles.includes(articleId) ? false : true
  );

  // Adding likes to local storage//
  useEffect(() => {
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
  }, [isLikeButtonActive]);

  useEffect(() => {
    localStorage.setItem("dislikedArticles", JSON.stringify(dislikedArticles));
  }, [isDislikeButtonActive]);

  // HandleClick Event //

  const handleDislikeClick = (inc_vote) => {
    if (isDislikeButtonActive && !isLikeButtonActive) {
      inc_vote = -2;
    }
    setVote(inc_vote);
    if (inc_vote < 0 && !dislikedArticles.includes(articleId)) {
      setDislikedArticles((currDislikes) => {
        return [...currDislikes, articleId];
      });
      setLikedArticles((currLikes) => {
        return currLikes.filter((id) => id !== articleId);
      });
      setIsDislikeButtonActive(false);
      setIsLikeButtonActive(true);
    }
    if (inc_vote > 0) {
      setDislikedArticles((currDislikes) => {
        return currDislikes.filter((id) => id !== articleId);
      });
      setIsDislikeButtonActive(true);
    }
  };

  const handleLikeClick = (inc_vote) => {
    if (isLikeButtonActive && !isDislikeButtonActive) {
      inc_vote = 2;
    }
    setVote(inc_vote);
    if (inc_vote > 0 && !likedArticles.includes(articleId)) {
      setLikedArticles((currLikes) => {
        return [...currLikes, articleId];
      });
      setDislikedArticles((currDislikes) => {
        return currDislikes.filter((id) => id !== articleId);
      });
      setIsLikeButtonActive(false);
      setIsDislikeButtonActive(true);
    }
    if (inc_vote < 0) {
      setLikedArticles((currLikes) => {
        return currLikes.filter((id) => id !== articleId);
      });
      setIsLikeButtonActive(true);
    }
  };

  // Thumb Display //
  return (
    <section className="article__buttons">
      {isLikeButtonActive && (
        <FontAwesomeIcon
          className="article__buttons--like"
          onClick={() => handleLikeClick(1)}
          icon={faThumbsUp}
          size="lg"
        />
      )}
      {!isLikeButtonActive && (
        <ActiveLikeButton>
          <FontAwesomeIcon
            onClick={() => handleLikeClick(-1)}
            icon={faThumbsUp}
            size="2xl"
          />
        </ActiveLikeButton>
      )}

      {"   "}

      {isDislikeButtonActive && (
        <FontAwesomeIcon
          className="article__buttons--dislike"
          onClick={() => handleDislikeClick(-1)}
          icon={faThumbsDown}
          size="lg"
        />
      )}
      {!isDislikeButtonActive && (
        <ActiveDislikeButton>
          <FontAwesomeIcon
            onClick={() => handleDislikeClick(1)}
            icon={faThumbsDown}
            size="2xl"
          />
        </ActiveDislikeButton>
      )}
    </section>
  );
}
