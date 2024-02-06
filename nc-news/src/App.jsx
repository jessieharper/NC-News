import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  NavBar,
  SideBar,
  AllArticles,
  Profile,
  About,
  SingleArticle,
} from "./index";

import { fetchAllArticles } from "../utils/utils";

function App() {
  const [sideBarStatus, setSideBarStatus] = useState("sidebar--inactive");
  const [allArticles, setAllArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((res) => {
      setAllArticles(res);
    });
  }, []);

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
          element={
            <AllArticles
              allArticles={allArticles}
              setCurrentArticle={setCurrentArticle}
            />
          }
        />
        <Route
          path="/SingleArticle"
          element={<SingleArticle currentArticle={currentArticle} />}
        />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
