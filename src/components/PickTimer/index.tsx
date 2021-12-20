import AccentButton from "components/AccentButton";
import Flex from "components/Flex";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TimerContext } from "Store/TimerProvider";
import PickTimerButton from "./PickTimerButton";

export default () => {
  const { timers } = useContext(TimerContext);
  const navigate = useNavigate();
  return (
    <div>
      <h2>Pick timer</h2>
      <Flex column gap={5}>
        {timers
          .map((props) => ({ ...props, onClick: () => {} }))
          .map(PickTimerButton)}
        <AccentButton name="NEW" onClick={() => navigate("/new-timer")} />
      </Flex>
    </div>
  );
};
