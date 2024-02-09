import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { patchArticleVotes } from "../../utils/utils";
import { RatingButtonManager } from "../index";

export default function ArticleRating({ setVoteCounter, voteCounter }) {
  const { articleId } = useParams();

  useEffect(() => {
    patchArticleVotes(articleId, voteCounter);
  }, [voteCounter]);

  return (
    <div className="articles__box-footer--votes">
      <RatingButtonManager
        articleId={articleId}
        setVoteCounter={setVoteCounter}
      />
    </div>
  );
}
