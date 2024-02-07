import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleComments } from "../../utils/utils";
import { CommentCard, PostComment } from "../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Comments({ user }) {
  const [comments, setComments] = useState([]);
  const [isCommentButtonActive, setisCommentButtonActive] = useState(false);
  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleComments(articleId).then((res) => {
      setComments(res);
    });
  }, [articleId]);

  return (
    <section className="comments">
      <header>
        <h4>Comments</h4>
        {!isCommentButtonActive && (
          <button
            onClick={() => setisCommentButtonActive(true)}
            className="comments__button"
          >
            <FontAwesomeIcon icon={faPlus} /> Add Comment
          </button>
        )}
        <PostComment
          trigger={isCommentButtonActive}
          articleId={articleId}
          setComments={setComments}
          user={user}
        />
      </header>
      <CommentCard comments={comments} user={user} />
    </section>
  );
}
