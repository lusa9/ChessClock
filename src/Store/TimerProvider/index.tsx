import { createContext, useState } from "react";
import { TimerProps } from "types";

const initialTimers: TimerProps[] = [
  {
    timeMin: 3,
    incrementSec: 2,
  },
  {
    timeMin: 5,
  },
  {
    timeMin: 10,
  },
  {
    timeMin: 15,
    incrementSec: 10,
  },
];

interface TimerContextProps {
  timers: TimerProps[];
}

export const TimerContext = createContext<TimerContextProps>({
  timers: initialTimers,
});

interface TimerProviderProps {
  children?: React.ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [timers] = useState(initialTimers);
  return (
    <TimerContext.Provider value={{ timers }}>{children}</TimerContext.Provider>
  );
};
