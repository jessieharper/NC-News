import { useState, useEffect } from "react";
import { fetchArticleComments } from "../../utils/utils";
import CommentCard from "./CommentCard";

export default function Comments({ currentArticle }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleComments(currentArticle.article_id).then((res) => {
      setComments(res);
    });
  }, [currentArticle]);

  return (
    <section>
      <header>
        <h3>Comments</h3>
      </header>
      <CommentCard comments={comments} />
    </section>
  );
}
