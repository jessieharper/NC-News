import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import AllArticles from "./components/AllArticles";
import Profile from "./components/Profile";
import About from "./components/About";
import { fetchAllArticles } from "../utils/utils";

function App() {
  const [tripleBarStatus, setTripleBarStatus] = useState("header--inactive");
  const [sideBarStatus, setSideBarStatus] = useState("sidebar--inactive");
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles().then((res) => {
      setAllArticles(res);
    });
  }, []);

  {
    /* 
  </header> */
  }

  return (
    <main className="container">
      <header className={tripleBarStatus}>
        <Header tripleBarStatus={tripleBarStatus} />
        <NavBar setTripleBarStatus={setTripleBarStatus} />
      </header>
      <nav className={sideBarStatus}>
        <SideBar setSideBarStatus={setSideBarStatus} />
      </nav>
      <Routes>
        <Route path="/" element={<AllArticles allArticles={allArticles} />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </main>
  );
}

export default App;
