import { useState } from "react";
import styled from "styled-components";

const Box = styled.article`
  background-color: rgb(255, 253, 253);
  border-radius: 20px;
  box-shadow: 10px 15px rgba(33, 32, 32, 0.222);
  padding: 1em;
  margin: 50px auto;
  width: 90%;
  max-width: 500px;
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
`;
const ActiveDislikeButton = styled.button`
  color: rgb(227, 9, 9);
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
    y: "0%",
  },
  end: {
    y: "100%",
  },
};

const spinnerCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
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
// overflow: hidden;
export {
  Box,
  Expandable,
  ActiveLikeButton,
  ActiveDislikeButton,
  CommentBox,
  spinnerContainerVariants,
  spinnerCircleVariants,
  spinnerCircleTransition,
};
