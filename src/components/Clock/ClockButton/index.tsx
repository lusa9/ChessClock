import Flex from "components/Flex";
import { useEffect, useMemo, useState } from "react";
import { ClockObject } from "../ClockObject";
import styles from "./styles.module.css";

export interface ClockButtonProps {
  clock: ClockObject;
  onClick: () => void;
  isActive: boolean;
  disabled?: boolean;
}
export default ({ clock, onClick, isActive, disabled }: ClockButtonProps) => {
  const [label, setLabel] = useState(clock.label);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    clock.onLabelChange = setLabel;
    clock.onExpiry = () => setExpired(true);

    return () => {
      clock.onLabelChange = undefined;
      clock.onExpiry = undefined;
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
