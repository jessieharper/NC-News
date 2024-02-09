import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArticleCard } from "../index";
import { fetchAllArticles } from "../../utils/utils";

export default function Topics({ setAllArticles, allArticles }) {
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles("topic", topic).then((res) => {
      setAllArticles(res);
    });
  }, []);

  return (
    <section className="articles">
      <h2>#{topic}</h2>
      {allArticles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}
