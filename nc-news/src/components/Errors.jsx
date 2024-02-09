import { Box } from "./styled-components/StyledComponents";

export default function Errors({ message, status }) {
  return (
    <Box className="error__status">
      <h3>Error {status}:</h3>
      <br />
      <p>{message}</p>
      <br />
      <img
        src={`https://http.cat/${status}`}
        alt="A cat in a predicament that depicts the current error status"
        className="error__status--img"
      />
    </Box>
  );
}
