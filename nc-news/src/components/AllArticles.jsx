import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

import { fetchAllArticles } from "../../utils/utils";

export default function AllArticles({ setCurrentArticle }) {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((res) => {
      setAllArticles(res);
    });
  }, []);
  return (
    <section className="articles">
      <h2>Articles</h2>
      {allArticles.map((article) => {
        return (
          <ArticleCard
            key={article.article_id}
            article={article}
            setCurrentArticle={setCurrentArticle}
          />
        );
      })}
    </section>
  );
}
