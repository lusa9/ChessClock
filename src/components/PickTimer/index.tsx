import AccentButton from "components/AccentButton";
import Flex from "components/Flex";
import { useContext } from "react";
import { TimerContext } from "Store/TimerProvider";
import PickTimerButton from "./PickTimerButton";

export default () => {
  const { timers } = useContext(TimerContext);
  return (
    <Flex column justifyContentEnd>
      <h2>Pick timer</h2>
      <Flex column gap={5}>
        {timers
          .map((props) => ({ ...props, onClick: () => {} }))
          .map(PickTimerButton)}
        <AccentButton name="NEW" onClick={() => {}} />
      </Flex>
    </Flex>
  );
};
