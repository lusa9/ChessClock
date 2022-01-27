import Flex from "components/Flex";
import styles from "./styles.module.css";
import resetImgSrc from "./reset.svg";
import pauseImgSrc from "./pause.svg";

export default () => (
  <Flex gap={10}>
    <ControlButton src={resetImgSrc} alt="reset" />
    <ControlButton src={pauseImgSrc} alt="pause" />
  </Flex>
);

interface ControlButtonProps {
  src: string;
  alt: string;
}

const ControlButton = ({ src, alt }: ControlButtonProps) => (
  <button className={styles.button}>
    <img {...{ src, alt }} />
  </button>
);
