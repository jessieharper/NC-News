import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleCard, Errors, Sorting } from "../index";
import { fetchAllArticles } from "../../utils/utils";

export default function AllArticles({
  setAllArticles,
  allArticles,
  error,
  setError,
}) {
  const [searchParam, setSearchParam] = useState("");
  const [order, setOrder] = useState("");
  const [articleTitle, setArticleTitle] = useState("All Articles");
  const { topic } = useParams();

  useEffect(() => {
    if (topic)
      setArticleTitle(topic.slice(0, 1).toUpperCase() + topic.slice(1));
    else setArticleTitle("All Articles");
    fetchAllArticles("sort_by", searchParam, order, topic)
      .then((res) => {
        setAllArticles(res);
      })
      .catch((err) => {
        setError(err);
      });
  }, [searchParam, order, topic]);

  if (error) {
    const message = error.response.data.msg;
    return <Errors message={message} status={error.response.status} />;
  }

  return (
    <section className="articles">
      <header className="articles__header">
        <h2>{articleTitle}</h2>
        <Sorting
          order={order}
          setOrder={setOrder}
          setSearchParam={setSearchParam}
        />
      </header>

      {allArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}
