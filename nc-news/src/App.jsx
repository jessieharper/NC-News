import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, SideBar, AllArticles, SingleArticle } from "./index";

function App() {
  const [sideBarStatus, setSideBarStatus] = useState("sidebar--inactive");
  const [currentArticle, setCurrentArticle] = useState([]);

  return (
    <main className="container">
      <header className="header">
        <NavBar />
      </header>
      <nav className={sideBarStatus}>
        <SideBar setSideBarStatus={setSideBarStatus} />
      </nav>
      <Routes>
        <Route
          path="/"
          element={<AllArticles setCurrentArticle={setCurrentArticle} />}
        />
        <Route
          path="/SingleArticle"
          element={<SingleArticle currentArticle={currentArticle} />}
        />
      </Routes>
    </main>
  );
}

export default App;
