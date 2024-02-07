import { Expandable } from "./styled-components/StyledComponents";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";

export default function CommentCard({ comments }) {
  return (
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
                icon={+comment.votes < 0 ? faHeartCrack : faHeart}
              />
              {"  "}
              {comment.votes}
            </div>
            <br />
          </section>
        );
      })}
    </Expandable>
  );
}
