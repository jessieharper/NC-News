import { useState } from "react";
import { deleteComment } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function DeleteComments({ setComments, comment_id }) {
  const [deleteText, setDeleteText] = useState("");

  const handleDelete = () => {
    setComments((currComments) => {
      return currComments.filter(
        (currComments) => currComments.comment_id !== comment_id
      );
    });
    deleteComment(comment_id);
  };

  const handleTrashClick = () => {
    setDeleteText(() => {
      return (
        <>
          Delete comment?{" "}
          <button onClick={() => handleDelete()}>
            <FontAwesomeIcon
              icon={faCheck}
              style={{ color: "#63E6BE" }}
              size="xl"
            />
          </button>{" "}
          <button onClick={() => setDeleteText("")}>
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#e0002d" }}
              size="xl"
            />
          </button>
        </>
      );
    });
  };

  return (
    <section className="comment__delete">
      {!deleteText && (
        <button onClick={handleTrashClick}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      )}
      <div className="comment__delete--confirmation">{deleteText}</div>
    </section>
  );
}
