import styled from "styled-components";
import { FlashcardBaseContainer } from "./FlashcardBaseContainer";
import { FlashcardText } from "./FlashcardText";
import { CARD_STATUS } from "../../../../../constants";

export function FlippedFlashcard({ card, onCardAnswer }) {
  return (
    <FlippedFlashcardContainer>
      <FlashcardText>{card.answer}</FlashcardText>
      <ActionButtonsContainer>
        <ActionButton
          onClick={() => onCardAnswer(card, CARD_STATUS.FORGOTTEN)}
          backgroundColor="#FF3030"
          data-test="no-btn"
        >
          Não Lembrei
        </ActionButton>
        <ActionButton
          onClick={() => onCardAnswer(card, CARD_STATUS.ALMOST_FORGOTTEN)}
          backgroundColor="#FF922E"
          data-test="partial-btn"
        >
          Quase Não Lembrei
        </ActionButton>
        <ActionButton
          onClick={() => onCardAnswer(card, CARD_STATUS.ZAPPED)}
          backgroundColor="#2FBE34"
          data-test="zap-btn"
        >
          Zap!
        </ActionButton>
      </ActionButtonsContainer>
    </FlippedFlashcardContainer>
  );
}

const FlippedFlashcardContainer = styled(FlashcardBaseContainer)`
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
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ActionButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  width: 30%;
`;
