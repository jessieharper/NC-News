import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  SideBar,
  AllArticles,
  SingleArticle,
  Comments,
  ArticleRating,
} from "./index";

function App() {
  const [sideBarStatus, setSideBarStatus] = useState("sidebar--inactive");
  const [user, setUser] = useState("cooljmessy");

  return (
    <main className="container">
      <header className="header">
        <NavBar />
      </header>
      <nav className={sideBarStatus}>
        <SideBar setSideBarStatus={setSideBarStatus} />
      </nav>
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
        <Route
          path="/articles/:articleId"
          element={<SingleArticle user={user} />}
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
      </Routes>
    </main>
  );
}

export default App;
