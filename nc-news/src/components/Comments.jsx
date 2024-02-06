import { useState, useEffect } from "react";
import { fetchArticleComments } from "../../utils/utils";
import { Expandable } from "./styled-components/StyledComponents";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

export default function Comments({ currentArticle }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleComments(currentArticle.article_id).then((res) => {
      setComments(res);
    });
  }, [currentArticle]);

  return (
    <section>
      <h3>Comments</h3>

      <Expandable>
        {comments.map((comment) => {
          return (
            <section key={comment.comment_id}>
              <p>{comment.body}</p>
              <br></br>
              <p>
                by {comment.author},{" "}
                {moment(comment.created_at).format("MMM Do YYYY, h:mm a")}
              </p>
              <div>
                <FontAwesomeIcon
                  icon={+comment.votes < 0 ? faThumbsDown : faThumbsUp}
                />{" "}
                {comment.votes}
              </div>
              <br />
            </section>
          );
        })}
      </Expandable>
    </section>
  );
}
