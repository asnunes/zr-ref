import styled from "styled-components";
import { FlashcardBaseContainer } from "./FlashcardBaseContainer";
import { FlashcardText } from "./FlashcardText";

import flipImage from "../../../../../assets/img/seta_virar.png";

export function OpenedFlashcard({ card, onCardFlip }) {
  return (
    <OpenedFlashcardContainer>
      <FlashcardText>{card.question}</FlashcardText>
      <img
        src={flipImage}
        alt="flip flashcard"
        data-test="turn-btn"
        onClick={() => onCardFlip(card)}
      />
    </OpenedFlashcardContainer>
  );
}

const OpenedFlashcardContainer = styled(FlashcardBaseContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffd4;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 14pt;
    min-height: 12vh;
  }

  img {
    display: block;
    margin-left: auto;
  }
`;
