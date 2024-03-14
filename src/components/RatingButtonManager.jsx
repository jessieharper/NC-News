import { useState, useEffect } from "react";
import {
  ActiveLikeButton,
  ActiveDislikeButton,
} from "./styled-components/StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function RatingButtonManager({ articleId, setVoteCounter }) {
  const likesFromLocalStorage = JSON.parse(
    localStorage.getItem("likedArticles") || "[]"
  );
  const dislikesFromLocalStorage = JSON.parse(
    localStorage.getItem("dislikedArticles") || "[]"
  );
  const [likedArticles, setLikedArticles] = useState(likesFromLocalStorage);
  const [dislikedArticles, setDislikedArticles] = useState(
    dislikesFromLocalStorage
  );
  const [isLiked, setIsLiked] = useState();
  const [isDisliked, setIsDisliked] = useState();

  useEffect(() => {
    setIsLiked(likedArticles.includes(articleId) ? true : false);
    setIsDisliked(dislikedArticles.includes(articleId) ? true : false);
  }, []);

  // Adding likes to local storage//

  useEffect(() => {
    localStorage.setItem("likedArticles", JSON.stringify(likedArticles));
  }, [likedArticles]);

  useEffect(() => {
    localStorage.setItem("dislikedArticles", JSON.stringify(dislikedArticles));
  }, [dislikedArticles]);

  // HandleClick Events //

  const handleDislikeClick = (inc_vote) => {
    if (!isDisliked && isLiked) {
      inc_vote = -2;
    }
    setVoteCounter((currCount) => {
      return currCount + inc_vote;
    });
    if (inc_vote < 0 && !dislikedArticles.includes(articleId)) {
      setDislikedArticles((currDislikes) => {
        return [...currDislikes, articleId];
      });
      setLikedArticles((currLikes) => {
        return currLikes.filter((id) => id !== articleId);
      });
      setIsDisliked(true);
      setIsLiked(false);
    }
    if (inc_vote > 0) {
      setDislikedArticles((currDislikes) => {
        return currDislikes.filter((id) => id !== articleId);
      });
      setIsDisliked(false);
    }
  };

  const handleLikeClick = (inc_vote) => {
    if (!isLiked && isDisliked) {
      inc_vote = 2;
    }
    setVoteCounter((currCount) => {
      return currCount + inc_vote;
    });

    if (inc_vote > 0 && !likedArticles.includes(articleId)) {
      setLikedArticles((currLikes) => {
        return [...currLikes, articleId];
      });
      setDislikedArticles((currDislikes) => {
        return currDislikes.filter((id) => id !== articleId);
      });
      setIsLiked(true);
      setIsDisliked(false);
    }
    if (inc_vote < 0) {
      setLikedArticles((currLikes) => {
        return currLikes.filter((id) => id !== articleId);
      });
      setIsLiked(false);
    }
  };

  // Thumb Display //
  return (
    <section className="article__buttons">
      {!isLiked && (
        <FontAwesomeIcon
          className="article__buttons--like"
          onClick={() => handleLikeClick(1)}
          icon={faThumbsUp}
          size="xl"
        />
      )}
      {isLiked && (
        <ActiveLikeButton>
          <FontAwesomeIcon
            onClick={() => handleLikeClick(-1)}
            icon={faThumbsUp}
            size="2xl"
          />
        </ActiveLikeButton>
      )}

      {"   "}

      {!isDisliked && (
        <FontAwesomeIcon
          className="article__buttons--dislike"
          onClick={() => handleDislikeClick(-1)}
          icon={faThumbsDown}
          size="xl"
        />
      )}
      {isDisliked && (
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
