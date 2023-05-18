import {
  AnsweredFlashcard,
  FlippedFlashcard,
  OpenedFlashcard,
  ClosedFlashcard,
} from "./components";
import { CARD_STATUS } from "../../../../constants";

export function Flashcard({ card, index, onStatusChange }) {
  function onCardOpen(incomingCard) {
    onStatusChange(incomingCard, CARD_STATUS.OPENED);
  }

  function onCardFlip(incomingCard) {
    onStatusChange(incomingCard, CARD_STATUS.FLIPPED);
  }

  function onCardAnswer(incomingCard, answer) {
    onStatusChange(incomingCard, answer);
  }

  switch (card.status) {
    case CARD_STATUS.OPENED:
      return <OpenedFlashcard card={card} onCardFlip={onCardFlip} />;
    case CARD_STATUS.FLIPPED:
      return <FlippedFlashcard card={card} onCardAnswer={onCardAnswer} />;
    case CARD_STATUS.CLOSED:
      return (
        <ClosedFlashcard card={card} index={index} onCardOpen={onCardOpen} />
      );
    default:
      return <AnsweredFlashcard card={card} index={index} />;
  }
}
