import styled from "styled-components";

export const FlashcardBaseContainer = styled.div.attrs({
  "data-test": "flashcard",
})`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 2px 2px 2px rgba(0, 0, 0, 0.1);

  padding: 15px;
  margin: 10px 0;
`;
