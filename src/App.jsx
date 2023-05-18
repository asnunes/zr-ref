import { useState } from "react";

import {
  Footer,
  Logo,
  Flashcards,
  ScreenContainer,
  SplashScreen,
} from "./components";
import { DECK, CARD_STATUS } from "./constants";

export default function App() {
  const [didStart, setDidStart] = useState(false);
  const [cards, setCards] = useState(() => {
    const cardCopy = [...DECK];
    const shuffledCards = cardCopy.sort(() => Math.random() - 0.5);
    return shuffledCards
      .slice(0, 4)
      .map((card) => ({ ...card, status: CARD_STATUS.CLOSED }));
  }, []);

  function onCardStatusChange(card, status) {
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, status };
      }
      return c;
    });
    setCards(newCards);
  }

  return !didStart ? (
    <SplashScreen onStartClick={() => setDidStart(true)} />
  ) : (
    <ScreenContainer>
      <Logo />
      <Flashcards cards={cards} onCardStatusChange={onCardStatusChange} />
      <Footer cards={cards} />
    </ScreenContainer>
  );
}
