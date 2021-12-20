import AccentButton from "components/AccentButton";
import Flex from "components/Flex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TimerContext } from "Store/TimerProvider";
import TimersIndexButton from "./TimersIndexButton";

export default () => {
  const { timers } = useContext(TimerContext);
  const navigate = useNavigate();
  return (
    <div>
      <h2>Pick timer</h2>
      <Flex column gap={5}>
        {timers
          .map(({ timeMin, incrementSec }) => ({
            timeMin,
            incrementSec,
            onClick: () =>
              navigate(
                `/clock/${new URLSearchParams({
                  time: String(timeMin),
                  ...(incrementSec && { increment: String(incrementSec) }),
                })}`
              ),
          }))
          .map(TimersIndexButton)}
        <AccentButton name="NEW" onClick={() => navigate("/timers/new")} />
      </Flex>
    </div>
  );
};
