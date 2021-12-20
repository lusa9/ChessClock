import styles from "./styles.module.css";
import { TimerProps } from "types";

export interface PickTimerButtonProps extends TimerProps {
  onClick: () => void;
}

export default ({ timeMin, incrementSec, onClick }: PickTimerButtonProps) => {
  let displayText = `${timeMin}`;
  if (incrementSec) {
    displayText += ` | ${incrementSec}`;
  }
  return (
    <button
      className={styles.component}
      children={displayText}
      {...{ onClick }}
    />
  );
};
