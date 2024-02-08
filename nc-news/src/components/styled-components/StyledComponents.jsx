import { useState } from "react";
import styled from "styled-components";

const Box = styled.article`
  background-color: rgb(255, 253, 253);
  border-radius: 20px;
  box-shadow: 10px 15px rgba(33, 32, 32, 0.222);
  padding: 1em;
  margin: auto;
  margin-top: 10%;
  width: 90%;
  max-width: 500px;
  min-height: auto;
  align-self: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const ActiveLikeButton = styled.button`
  color: rgb(11, 81, 26);
`;
const ActiveDislikeButton = styled.button`
  color: rgb(227, 9, 9);
`;

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
export { Box, Expandable, ActiveLikeButton, ActiveDislikeButton };
