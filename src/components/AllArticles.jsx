import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArticleCard, Errors, Sorting } from "../index";
import { fetchAllArticles } from "../../utils/utils";
import { motion } from "framer-motion";
import {
  spinnerCircleVariants,
  spinnerContainerVariants,
  spinnerCircleTransition,
} from "./styled-components/StyledComponents";
import "./AllArticles.css";

export default function AllArticles({
  setAllArticles,
  allArticles,
  error,
  setError,
}) {
  const [searchParam, setSearchParam] = useState("");
  const [order, setOrder] = useState("DESC");
  const [articleTitle, setArticleTitle] = useState("All Articles");
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    if (topic)
      setArticleTitle(topic.slice(0, 1).toUpperCase() + topic.slice(1));
    else setArticleTitle("All Articles");
    setIsLoading(true);
    fetchAllArticles("sort_by", searchParam, order, topic)
      .then((res) => {
        setAllArticles(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
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
      {isLoading ? (
        <motion.div
          className="spinner__container--articles"
          variants={spinnerContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            className="spinner__circle--articles"
            variants={spinnerCircleVariants}
            transition={spinnerCircleTransition}
          />
          <motion.span
            className="spinner__circle--articles"
            variants={spinnerCircleVariants}
            transition={spinnerCircleTransition}
          />
          <motion.span
            className="spinner__circle--articles"
            variants={spinnerCircleVariants}
            transition={spinnerCircleTransition}
          />
        </motion.div>
      ) : (
        <>
          {allArticles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                isLoading={isLoading}
              />
            );
          })}
        </>
      )}
    </section>
  );
}
