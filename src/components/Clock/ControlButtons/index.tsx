import styles from "./styles.module.css";
import resetImgSrc from "./reset.svg";
import pauseImgSrc from "./pause.svg";
import React, { useMemo } from "react";

interface Props {
  onPauseButtonClick: () => void;
  onResetButtonClick: () => void;
  paused: boolean;
  isNewGame: boolean;
}

export default ({
  onPauseButtonClick,
  onResetButtonClick,
  paused,
  isNewGame,
}: Props) => {
  const onClick = useMemo(
    () => (paused ? onResetButtonClick : onPauseButtonClick),
    [paused, onResetButtonClick, onPauseButtonClick]
  );
  const src = useMemo(() => (paused ? resetImgSrc : pauseImgSrc), [paused]);
  const alt = useMemo(() => (paused ? "reset" : "pause"), [paused]);

  if (isNewGame) {
    return null;
  }

  return (
    <button className={styles.button} {...{ onClick }}>
      <img {...{ src, alt }} />
    </button>
  );
};
