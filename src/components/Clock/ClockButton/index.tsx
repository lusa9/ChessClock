import Flex from "components/Flex";
import { useEffect, useMemo, useState } from "react";
import { ClockObject } from "../ClockObject";
import styles from "./styles.module.css";

export interface ClockButtonProps {
  clock: ClockObject;
  onClick: () => void;
  isActive: boolean;
  expired: boolean;
  disabled?: boolean;
}
export default ({
  clock,
  onClick,
  isActive,
  expired,
  disabled,
}: ClockButtonProps) => {
  const [label, setLabel] = useState(clock.label);

  useEffect(() => {
    clock.onLabelChange = setLabel;

    return () => {
      clock.onLabelChange = undefined;
    };
  }, [clock]);

  const className = useMemo(() => {
    let classNames = [];
    if (isActive) {
      classNames.push(styles.active);
    }
    if (expired) {
      classNames.push(styles.expired);
    }
    return classNames.join(" ");
  }, [isActive, expired]);

  return (
    <button
      {...{ className }}
      onTouchStart={!disabled && !expired ? onClick : undefined}
    >
      <Flex justifyContentCenter alignItemsCenter>
        <h1>{label}</h1>
      </Flex>
    </button>
  );
};
