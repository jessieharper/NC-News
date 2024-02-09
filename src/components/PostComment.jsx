import { useState } from "react";
import { postComment } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function PostComment({ articleId, trigger, setComments, user }) {
  const [commentBody, setCommentBody] = useState("");
  const [submitStatus, setSubmitStatus] = useState("Post");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(articleId, user, commentBody);
    setSubmitStatus(
      <FontAwesomeIcon icon={faCheck} style={{ color: "#63E6BE" }} size="xl" />
    );
    const optimisticComment = {
      body: commentBody,
      author: user,
      votes: 0,
    };
    setComments((currComments) => {
      return [optimisticComment, ...currComments];
    });
  };

  return trigger ? (
    <div className="comment__form">
      <form onSubmit={handleSubmit}>
        <p>Posting as {user}</p>
        <textarea
          cols="60"
          rows="5"
          type="text"
          placeholder="Your comment"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          required
        />
        <button className="btn" type="submit">
          {submitStatus}
        </button>
      </form>
    </div>
  ) : (
    ""
  );
}
