import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArticleCard, Errors } from "../index";
import { fetchAllArticles } from "../../utils/utils";

export default function Topics({
  setAllArticles,
  allArticles,
  error,
  setError,
}) {
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles("topic", topic)
      .then((res) => {
        setAllArticles(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [topic]);

  if (error) {
    const message = error.response.data.msg;
    return <Errors message={message} status={error.response.status} />;
  }

  return (
    <section className="articles">
      <h2>#{topic}</h2>
      {allArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}
