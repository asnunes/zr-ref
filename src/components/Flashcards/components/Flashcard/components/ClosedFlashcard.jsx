import styled from "styled-components";
import { FlashcardBaseContainer } from "./FlashcardBaseContainer";
import { FlashcardText } from "./FlashcardText";

import playImage from "../../../../../assets/img/seta_play.png";

export function ClosedFlashcard({ card, index, onCardOpen }) {
  return (
    <ClosedFlashcardContainer>
      <FlashcardText>Pergunta {index + 1}</FlashcardText>
      <img
        src={playImage}
        alt="open flashcard"
        data-test="play-btn"
        onClick={() => onCardOpen(card)}
      />
    </ClosedFlashcardContainer>
  );
}

const ClosedFlashcardContainer = styled(FlashcardBaseContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${FlashcardText} {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 14pt;
  }
`;
