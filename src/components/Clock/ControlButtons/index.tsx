import Flex from "components/Flex";
import styles from "./styles.module.css";
import resetImgSrc from "./reset.svg";
import pauseImgSrc from "./pause.svg";

interface Props {
  onPauseButtonClick: () => void;
  onResetButtonClick: () => void;
}

export default ({ onPauseButtonClick, onResetButtonClick }: Props) => (
  <Flex gap={10}>
    <ControlButton src={resetImgSrc} alt="reset" onClick={onResetButtonClick} />
    <ControlButton src={pauseImgSrc} alt="pause" onClick={onPauseButtonClick} />
  </Flex>
);

interface ControlButtonProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const ControlButton = ({ src, alt, onClick }: ControlButtonProps) => (
  <button className={styles.button} {...{ onClick }}>
    <img {...{ src, alt }} />
  </button>
);
