import imageWrong from "../assets/img/icone_erro.png";
import imagePartial from "../assets/img/icone_quase.png";
import imageRight from "../assets/img/icone_certo.png";
import { CARD_STATUS } from "../constants";

export function ForgotIcon() {
  return <img data-test="no-icon" src={imageWrong} alt="answered flashcard" />;
}

export function AlmostForgotIcon() {
  return (
    <img data-test="partial-icon" src={imagePartial} alt="answered flashcard" />
  );
}

export function ZapIcon() {
  return <img data-test="zap-icon" src={imageRight} alt="answered flashcard" />;
}

export function Icon({ cardStatus }) {
  if (cardStatus === CARD_STATUS.ZAPPED) {
    return <ZapIcon />;
  }

  if (cardStatus === CARD_STATUS.ALMOST_FORGOTTEN) {
    return <AlmostForgotIcon />;
  }

  if (cardStatus === CARD_STATUS.FORGOTTEN) {
    return <ForgotIcon />;
  }

  return null;
}
