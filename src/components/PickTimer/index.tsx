import { useContext } from "react";
import { TimerContext } from "Store/TimerProvider";
import PickTimerButton from "./PickTimerButton";

export default () => {
  const { timers } = useContext(TimerContext);
  return (
    <div>
      <h2>Pick timer</h2>
      {timers
        .map((props) => ({ ...props, onClick: () => {} }))
        .map(PickTimerButton)}
    </div>
  );
};
