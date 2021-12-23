import Flex from "components/Flex";
import React, { useCallback, useMemo, useState } from "react";
import ClockButton from "./ClockButton";
import styles from "./styles.module.css";

interface Props {
  timeMin: number;
  incrementSec?: number;
}

const clocks = [...Array(2)];

export default ({ timeMin, incrementSec }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const onClick = useCallback(
    (index: number) => () => setActiveIndex((index + 1) % 2),
    []
  );

  const clockButtons = useMemo(
    () =>
      clocks.map((_, index) => ({
        isActive: index === activeIndex,
        label: String(timeMin),
        onClick: onClick(index),
      })),
    [activeIndex, timeMin, onClick]
  );

  return (
    <Flex
      column
      className={styles.component}
      style={{ height: window.innerHeight }}
    >
      {clockButtons.map((props, index) => (
        <React.Fragment key={index}>
          <ClockButton {...props} />
        </React.Fragment>
      ))}
    </Flex>
  );
};
