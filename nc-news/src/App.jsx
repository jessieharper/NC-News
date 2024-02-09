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
      <Routes>
        <Route path="*" element={<Errors error={error} />} />

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
          path="/:articleId"
          element={
            <SingleArticle user={user} error={error} setError={setError} />
          }
        />
        <Route
          path="/:articleId/comments"
          element={
            <>
              <Comments />
              <ArticleRating />
            </>
          }
        />
        <Route
          path="/topics/:topic"
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
      </Routes>
    </main>
  );
}

export default App;
