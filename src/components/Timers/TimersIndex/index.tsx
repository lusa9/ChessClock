import AccentButton from "components/AccentButton";
import Flex from "components/Flex";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TimerContext } from "Store/TimerProvider";
import TimersIndexButton from "./TimersIndexButton";
import styles from "./styles.module.css";

export default () => {
  const { timers } = useContext(TimerContext);
  const navigate = useNavigate();
  return (
    <Flex column justifyContentEnd style={{ height: window.innerHeight }}>
      <div className={styles.contentContainer}>
        <h2>Pick timer</h2>
        <Flex column gap={5}>
          {timers
            .map(({ timeMin, incrementSec }) => {
              let label = `${timeMin}`;
              if (incrementSec) {
                label += ` | ${incrementSec}`;
              }
              return {
                label,
                onClick: () =>
                  navigate(
                    `/clock/${new URLSearchParams({
                      time: String(timeMin),
                      increment: String(incrementSec),
                    })}`
                  ),
              };
            })
            .map((props) => (
              <React.Fragment key={props.label}>
                <TimersIndexButton {...props} />
              </React.Fragment>
            ))}
          <AccentButton label="NEW" onClick={() => navigate("/timers/new")} />
        </Flex>
      </div>
    </Flex>
  );
};
