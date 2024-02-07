import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticleComments } from "../../utils/utils";
import CommentCard from "./CommentCard";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const { articleId } = useParams();

  useEffect(() => {
    fetchArticleComments(articleId).then((res) => {
      setComments(res);
    });
  }, [articleId]);

  return (
    <section>
      <header>
        <h4>Comments</h4>
      </header>
      <CommentCard comments={comments} />
    </section>
  );
}
