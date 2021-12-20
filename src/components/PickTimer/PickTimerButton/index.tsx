import styles from "./styles.module.css";
import { TimerProps } from "types";

export default ({ timeMin, incrementSec }: TimerProps) => {
  let displayText = `${timeMin}`;
  if (incrementSec) {
    displayText += ` | ${incrementSec}`;
  }
  return <button className={styles.component} children={displayText} />;
};
