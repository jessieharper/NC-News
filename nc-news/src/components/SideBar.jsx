import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchAllTopics } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

export default function SideBar({ setSideBarStatus, sideBarStatus }) {
  const [arrowDirection, setArrowDirection] = useState(faAnglesDown);
  const [allTopics, setAllTopics] = useState([]);

  const handleClick = () => {
    setSideBarStatus((currStatus) => {
      return currStatus === "side__bar" ? "side__bar open" : "side__bar";
    });
    setArrowDirection((currAngle) => {
      return currAngle === faAnglesDown ? faAnglesUp : faAnglesDown;
    });
  };

  useEffect(() => {
    fetchAllTopics().then((res) => {
      setAllTopics(res);
    });
  }, []);

  return (
    <nav>
      <div onClick={handleClick} className={sideBarStatus}>
        {sideBarStatus === "side__bar open" && (
          <div className="sidebar__navbar">
            <h3>Topics</h3>
            <ul>
              {allTopics.map((topic) => {
                return (
                  <li className="btn" key={topic.slug}>
                    <Link to={`/topics/${topic.slug.toLowerCase()}`}>
                      #{topic.slug.toLowerCase()}
                    </Link>
                  </li>
                );
              })}
              <li className="sidebar__navbar--link btn">
                <Link to="">Popular</Link>
              </li>
              <li className="sidebar__navbar--link btn">
                <Link to="">Recent</Link>
              </li>
            </ul>
          </div>
        )}
        <FontAwesomeIcon icon={arrowDirection} size="lg" />
      </div>
    </nav>
  );
}
