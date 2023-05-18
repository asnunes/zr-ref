import styled from "styled-components";
import { Flashcard } from "./components";

export function Flashcards({ cards, onCardStatusChange }) {
  return (
    <FlashcardsContainer>
      {cards.map((card, index) => (
        <Flashcard
          key={card.id}
          index={index}
          card={card}
          onStatusChange={onCardStatusChange}
        />
      ))}
    </FlashcardsContainer>
  );
}

const FlashcardsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0 10px;
`;
