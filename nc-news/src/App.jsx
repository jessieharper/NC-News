import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  SideBar,
  AllArticles,
  SingleArticle,
  Comments,
  ArticleRating,
  Topics,
} from "./index";

function App() {
  const [sideBarStatus, setSideBarStatus] = useState("side__bar");
  const [user, setUser] = useState("cooljmessy");
  const [allArticles, setAllArticles] = useState([]);

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
        <Route
          path="/"
          element={
            <AllArticles
              setAllArticles={setAllArticles}
              allArticles={allArticles}
            />
          }
        />
        <Route path="/:articleId" element={<SingleArticle user={user} />} />
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
              <Topics
                setAllArticles={setAllArticles}
                allArticles={allArticles}
              />
            </>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
