import Flex from "components/Flex";
import React, { useCallback, useMemo, useState } from "react";
import ClockButton from "./ClockButton";
import { ClockObject } from "./ClockObject";
import styles from "./styles.module.css";

interface Props {
  timeMin: number;
  incrementSec?: number;
}

export default ({ timeMin, incrementSec }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  const clocks = useMemo(
    () => [...Array(2)].map((_) => new ClockObject(timeMin, incrementSec)),
    [timeMin, incrementSec]
  );

  const clockButtons = useMemo(
    () =>
      clocks.map((clock, index) => {
        return {
          isActive: index === activeIndex,
          disabled: activeIndex !== undefined ? index !== activeIndex : false,
          clock,
          onClick: () => {
            if (activeIndex !== undefined) {
              clock.press();
            }
            const otherClockIndex = (index + 1) % 2;
            const otherClock = clocks[otherClockIndex];
            otherClock.start();

            setActiveIndex(otherClockIndex);
          },
        };
      }),
    [clocks, activeIndex]
  );

  const onPauseButtonClick = useCallback(() => {
    clocks.forEach((clock) => {
      clock.pause();
    });
  }, []);

  const onResetButtonClick = useCallback(() => {
    clocks.forEach((clock) => {
      clock.reset();
    });
  }, []);

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
