import styles from "./styles.module.css";
import resetImgSrc from "./reset.svg";
import pauseImgSrc from "./pause.svg";
import React, { useMemo } from "react";

interface Props {
  onPauseButtonClick: () => void;
  onResetButtonClick: () => void;
  paused: boolean;
  isNewGame: boolean;
  expired: boolean;
}

export default ({
  onPauseButtonClick,
  onResetButtonClick,
  paused,
  isNewGame,
  expired,
}: Props) => {
  const onClick = useMemo(
    () => (paused || expired ? onResetButtonClick : onPauseButtonClick),
    [paused, expired, onResetButtonClick, onPauseButtonClick]
  );
  const src = useMemo(
    () => (paused || expired ? resetImgSrc : pauseImgSrc),
    [paused, expired]
  );
  const alt = useMemo(
    () => (paused || expired ? "reset" : "pause"),
    [paused, expired]
  );

  if (isNewGame) {
    return null;
  }

  return (
    <button className={styles.button} {...{ onClick }}>
      <img {...{ src, alt }} />
    </button>
  );
};
