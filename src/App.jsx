import { useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  const [sideBarStatus, setSideBarStatus] = useState("side__bar");
  const [user, setUser] = useState("cooljmessy");
  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState(null);

  return (
    <main className="container">
      <header className="header">
        <NavBar />
      </header>
      <nav className={sideBarStatus}>
        <SideBar
          setSideBarStatus={setSideBarStatus}
          sideBarStatus={sideBarStatus}
        />
      </nav>
      <section className="container__page-contents">
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
      </section>
    </main>
  );
}

export default App;
