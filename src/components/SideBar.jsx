import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { fetchAllTopics } from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAnglesDown,
  faAnglesUp,
  faHashtag,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import {
  spinnerCircleVariants,
  spinnerContainerVariants,
  spinnerCircleTransition,
} from "./styled-components/StyledComponents";
import "./SideBar.css";

export default function SideBar() {
  const [arrowDirection, setArrowDirection] = useState(faAnglesDown);
  const [isLoading, setIsLoading] = useState(true);
  const isLargeScreen = useMediaQuery({ minWidth: 768 });
  const [sideBarStatus, setSideBarStatus] = useState(
    isLargeScreen ? "sidebar--side" : "sidebar--top"
  );
  const [allTopics, setAllTopics] = useState([]);

  const handleClick = () => {
    setSideBarStatus((currStatus) => {
      return currStatus === "sidebar--top"
        ? "sidebar--top open"
        : "sidebar--top";
    });
    setArrowDirection((currAngle) => {
      return currAngle === faAnglesDown ? faAnglesUp : faAnglesDown;
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllTopics().then((res) => {
      setAllTopics(res);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    setSideBarStatus(isLargeScreen ? "sidebar--side" : "sidebar--top");
  }, [isLargeScreen]);

  return (
    <nav className={sideBarStatus}>
      <div className={sideBarStatus}>
        {(sideBarStatus === "sidebar--top open" || isLargeScreen) && (
          <div className={!isLargeScreen ? "topics" : "sidebar--topics"}>
            <h3>
              Topics <FontAwesomeIcon icon={faNewspaper} />
            </h3>
            {isLoading ? (
              <motion.div
                className="spinner__container"
                variants={spinnerContainerVariants}
                initial="start"
                animate="end"
              >
                <motion.span
                  className="spinner__circle"
                  variants={spinnerCircleVariants}
                  transition={spinnerCircleTransition}
                />
                <motion.span
                  className="spinner__circle"
                  variants={spinnerCircleVariants}
                  transition={spinnerCircleTransition}
                />
                <motion.span
                  className="spinner__circle"
                  variants={spinnerCircleVariants}
                  transition={spinnerCircleTransition}
                />
              </motion.div>
            ) : (
              <ul>
                {allTopics.map((topic) => {
                  return (
                    <li
                      className={!isLargeScreen ? "btn" : "button"}
                      key={topic.slug}
                    >
                      <FontAwesomeIcon icon={faHashtag} />
                      <Link to={`/articles/topics/${topic.slug.toLowerCase()}`}>
                        {topic.slug.toLowerCase()}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
        {!isLargeScreen && (
          <FontAwesomeIcon
            onClick={handleClick}
            icon={arrowDirection}
            size="lg"
          />
        )}
      </div>
    </nav>
  );
}
