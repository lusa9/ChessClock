import Flex from "components/Flex";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ClockButton from "./ClockButton";
import { ClockObject } from "./ClockObject";
import ControlButtons from "./ControlButtons";
import styles from "./styles.module.css";

interface Props {
  timeMin: number;
  incrementSec?: number;
}

export default ({ timeMin, incrementSec }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>();
  const [expired, setExpired] = useState(false);
  const [isNewGame, setIsNewGame] = useState(true);

  const clocks = useMemo(
    () => [...Array(2)].map((_) => new ClockObject(timeMin, incrementSec)),
    [timeMin, incrementSec]
  );

  const clockButtons = useMemo(
    () =>
      clocks.map((clock, index) => {
        return {
          isActive: index === activeIndex,
          disabled:
            expired || activeIndex !== undefined
              ? index !== activeIndex
              : false,
          clock,
          onClick: () => {
            if (activeIndex !== undefined) {
              clock.press();
            }
            const otherClockIndex = (index + 1) % 2;
            const otherClock = clocks[otherClockIndex];
            otherClock.start();

            setActiveIndex(otherClockIndex);
            setIsNewGame(false);
          },
          expired: expired ? index === activeIndex : false,
        };
      }),
    [clocks, activeIndex, expired]
  );

  const onPauseButtonClick = useCallback(() => {
    clocks.forEach((clock) => {
      clock.pause();
    });

    setActiveIndex(undefined);
  }, [clocks]);

  const onResetButtonClick = useCallback(() => {
    clocks.forEach((clock) => {
      clock.reset();
    });

    setActiveIndex(undefined);
    setIsNewGame(true);
  }, [clocks]);

  useEffect(() => {
    clocks.forEach((clock) => {
      clock.onExpiryChange = setExpired;
    });

    return () => {
      clocks.forEach((clock) => {
        clock.onExpiryChange = undefined;
      });
    };
  }, [clocks]);

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
      <div
        className={styles.controlButtonsContainer}
        style={{ height: window.innerHeight }}
      >
        <ControlButtons
          paused={activeIndex === undefined}
          {...{ onPauseButtonClick, onResetButtonClick, expired, isNewGame }}
        />
      </div>
    </Flex>
  );
};
