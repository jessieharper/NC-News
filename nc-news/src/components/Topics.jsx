import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ArticleCard } from "../index";
import { fetchAllArticles } from "../../utils/utils";

export default function Topics({ setAllArticles, allArticles }) {
  const { topic } = useParams();

  useEffect(() => {
    fetchAllArticles().then((res) => {
      setAllArticles(res);
    });
  }, []);

  return (
    <section className="articles">
      <h2>#{topic}</h2>
      {allArticles.map((article) => {
        if (article.topic === topic) {
          return <ArticleCard key={article.article_id} article={article} />;
        }
      })}
    </section>
  );
}
