import Flex from "components/Flex";
import { useCallback, useEffect, useState } from "react";
import { ClockObject } from "../ClockObject";
import styles from "./styles.module.css";

export interface ClockButtonProps {
  clock: ClockObject;
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
}
export default ({ clock, onClick, isActive, disabled }: ClockButtonProps) => {
  const [label, setLabel] = useState(String(clock.timeSecLeft));

  useEffect(() => {
    clock.onClockLabelChange = setLabel;
    return () => {
      clock.onClockLabelChange = undefined;
    };
  }, [clock]);

  return (
    <button
      onTouchStart={!disabled ? onClick : undefined}
      {...(isActive && { className: styles.active })}
    >
      <Flex justifyContentCenter alignItemsCenter>
        <h1>{label}</h1>
      </Flex>
    </button>
  );
};
