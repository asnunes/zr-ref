import styled from "styled-components";
import { Logo } from "./Logo";
import { ScreenContainer } from "./ScreenContainer";

export function SplashScreen({ onStartClick }) {
  return (
    <ScreenContainer>
      <Logo />
      <StartButton data-test="start-btn" onClick={onStartClick}>
        Inicial Recall!
      </StartButton>
    </ScreenContainer>
  );
}

export const StartButton = styled.button`
  width: 90%;
  background-color: #f2f2f2;
  color: #fb6b6b;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  padding: 10px;
`;
