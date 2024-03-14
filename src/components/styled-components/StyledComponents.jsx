import { useState } from "react";
import styled from "styled-components";

const Box = styled.article`
  background-color: rgb(255, 253, 253);
  border-radius: 20px;
  box-shadow: 10px 15px rgba(33, 32, 32, 0.222);
  padding: 1em;
  margin: 50px auto;
  margin-top: auto;
  width: 90%;
  max-width: 650px;
  min-height: auto;
  align-self: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const CommentBox = styled(Box)`
  margin: auto;
`;

const ActiveLikeButton = styled.button`
  color: rgb(11, 81, 26);
  background-color: transparent;
  border: 1px transparent;
  padding-right: 0.2em;
  cursor: pointer;
`;
const ActiveDislikeButton = styled.button`
  color: rgb(227, 9, 9);
  background-color: transparent;
  border: 1px transparent;
  padding-right: 0.2em;
  cursor: pointer;
`;

const DropdownListItem = styled.li`
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 15px;
  padding: 1rem 0 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.3s ease, margin-left 0.2s ease;
  &: hover {
    margin-left: 0.5rem;
    color: rgb(179, 94, 115);
  }
`;

const spinnerContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const spinnerCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "100%",
  },
};

const spinnerCircleTransition = {
  duration: 0.6,
  repeat: Infinity,
  repeatType: "loop",
  ease: "easeInOut",
};

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  return (
    <div>
      <button className="btn" onClick={toggleOpen}>
        {isOpen ? "Hide" : "Show"} comments
      </button>
      {isOpen ? children : null}
    </div>
  );
};

export {
  Box,
  Expandable,
  ActiveLikeButton,
  ActiveDislikeButton,
  CommentBox,
  spinnerContainerVariants,
  spinnerCircleVariants,
  spinnerCircleTransition,
  DropdownListItem,
};
