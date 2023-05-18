import { useMemo } from "react";
import styled from "styled-components";

import { Icon } from "../../../../FlashcardIcon";
import { FlashcardBaseContainer } from "./FlashcardBaseContainer";
import { FlashcardText } from "./FlashcardText";

import { CARD_STATUS } from "../../../../../constants";

export function AnsweredFlashcard({ card, index }) {
  const cardColor = useMemo(() => {
    if (card.status === CARD_STATUS.ZAPPED) return "#2FBE34";

    if (card.status === CARD_STATUS.ALMOST_FORGOTTEN) return "#FF922E";

    return "#FF3030";
  }, [card]);

  return (
    <AnsweredFlashcardContainer color={cardColor}>
      <FlashcardText>Pergunta {index + 1}</FlashcardText>
      <Icon cardStatus={card.status} />
    </AnsweredFlashcardContainer>
  );
}

const AnsweredFlashcardContainer = styled(FlashcardBaseContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 14pt;
    text-decoration: line-through;
    color: ${(props) => props.color};
  }
`;
