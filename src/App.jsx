import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import {
  NavBar,
  SideBar,
  AllArticles,
  SingleArticle,
  Comments,
  ArticleRating,
  Errors,
} from "./index";

function App() {
  const [user, setUser] = useState("cooljmessy");
  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState(null);

  return (
    <main className="container">
      <header className="header">
        <NavBar />
      </header>
      <SideBar />
      <section className="container__page-contents">
        <SkeletonTheme>
          <Routes>
            <Route
              path="/"
              element={
                <AllArticles
                  setAllArticles={setAllArticles}
                  allArticles={allArticles}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route
              path="/articles"
              element={
                <AllArticles
                  setAllArticles={setAllArticles}
                  allArticles={allArticles}
                  error={error}
                  setError={setError}
                />
              }
            />
            <Route
              path="/articles/:articleId"
              element={
                <SingleArticle user={user} error={error} setError={setError} />
              }
            />
            <Route
              path="/articles/:articleId/comments"
              element={
                <>
                  <Comments />
                  <ArticleRating />
                </>
              }
            />
            <Route
              path="/articles/topics/:topic"
              element={
                <>
                  <AllArticles
                    setAllArticles={setAllArticles}
                    allArticles={allArticles}
                    error={error}
                    setError={setError}
                  />
                </>
              }
            />
            <Route path="*" element={<Errors error={error} />} />
          </Routes>
        </SkeletonTheme>
      </section>
    </main>
  );
}

export default App;
