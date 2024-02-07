import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { patchArticleVotes } from "../../utils/utils";
import { RatingButtonManager } from "../index";

export default function ArticleRating({ setVoteCounter }) {
  const [vote, setVote] = useState(0);
  const { articleId } = useParams();

  useEffect(() => {
    setVoteCounter((currCounter) => {
      return currCounter + vote;
    });
    patchArticleVotes(articleId, vote);
  }, [vote]);

  return (
    <div className="articles__box-footer--votes">
      <RatingButtonManager articleId={articleId} setVote={setVote} />
    </div>
  );
}
