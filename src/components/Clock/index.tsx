import Flex from "components/Flex";
import ClockButton from "./ClockButton";
import styles from "./styles.module.css";

interface Props {
  timeMin: number;
  incrementSec?: number;
}

export default ({ timeMin, incrementSec }: Props) => (
  <Flex
    column
    className={styles.component}
    style={{ height: window.innerHeight }}
  >
    <ClockButton label={String(timeMin)} onClick={() => {}} />
    <ClockButton label={String(timeMin)} onClick={() => {}} />
  </Flex>
);
