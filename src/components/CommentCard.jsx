import { Expandable } from "./styled-components/StyledComponents";
import DeleteComments from "./DeleteComments";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

export default function CommentCard({ setComments, comments, user }) {
  return (
    <Expandable>
      {comments.map((comment) => {
        return (
          <section className="comment" key={comment.comment_id}>
            <p>{comment.body}</p>
            <br></br>
            <p>
              by {comment.author},{" "}
              {moment(comment.created_at).format("MMM Do YYYY, h:mm a")}
            </p>
            <div>
              <FontAwesomeIcon
                icon={+comment.votes < 0 ? faHeartCrack : faHeart}
              />
              {"  "}
              {comment.votes}{" "}
              {comment.author === user && (
                <DeleteComments
                  setComments={setComments}
                  comment_id={comment.comment_id}
                />
              )}
            </div>
          </section>
        );
      })}
    </Expandable>
  );
}
