import { useMemo } from "react";
import styled from "styled-components";
import { CARD_STATUS } from "../constants";
import { Icon } from "./FlashcardIcon";

export function Footer({ cards }) {
  const [numberOfAnsweredCards, numberOfCards] = useMemo(() => {
    const answeredCards = cards.filter((c) =>
      [
        CARD_STATUS.ZAPPED,
        CARD_STATUS.ALMOST_FORGOTTEN,
        CARD_STATUS.FORGOTTEN,
      ].includes(c.status)
    );

    return [answeredCards.length, cards.length];
  }, [cards]);

  const message = useMemo(() => {
    if (numberOfAnsweredCards !== numberOfCards) {
      return null;
    }

    const numberOfZappedCards = cards.filter(
      (c) => c.status === CARD_STATUS.ZAPPED
    ).length;

    return numberOfZappedCards === numberOfCards
      ? "Você não esqueceu de nenhum flashcard!"
      : "Você esqueceu alguns flashcards, mas não se preocupe, você pode revisar eles mais tarde!";
  }, [numberOfAnsweredCards, numberOfCards]);

  return (
    <FooterContainer data-test="footer">
      {message && (
        <FooterDoneMessage data-test="finish-text">{message}</FooterDoneMessage>
      )}
      <FooterCounter>
        {numberOfAnsweredCards}/{numberOfCards} concluídos
      </FooterCounter>
      <FooterIcons>
        {cards.map((card) => (
          <Icon cardStatus={card.status} key={card.id} />
        ))}
      </FooterIcons>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  text-transform: uppercase;
`;

const FooterDoneMessage = styled.div`
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  text-transform: uppercase;
`;

const FooterCounter = styled.p``;

const FooterIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 5px;
`;
