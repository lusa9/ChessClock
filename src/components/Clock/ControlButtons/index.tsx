import styles from "./styles.module.css";
import resetImgSrc from "./reset.svg";
import pauseImgSrc from "./pause.svg";
import { useMemo } from "react";

interface Props {
  onPauseButtonClick: () => void;
  onResetButtonClick: () => void;
  paused: boolean;
}

export default ({ onPauseButtonClick, onResetButtonClick, paused }: Props) => {
  const onClick = useMemo(
    () => (paused ? onResetButtonClick : onPauseButtonClick),
    [paused, onResetButtonClick, onPauseButtonClick]
  );
  const src = useMemo(() => (paused ? resetImgSrc : pauseImgSrc), [paused]);
  const alt = useMemo(() => (paused ? "reset" : "pause"), [paused]);

  return (
    <button className={styles.button} {...{ onClick }}>
      <img {...{ src, alt }} />
    </button>
  );
};
