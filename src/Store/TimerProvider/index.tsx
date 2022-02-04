import { createContext, useCallback, useEffect, useState } from "react";
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
  addTimer: (timer: TimerProps) => void;
}

export const TimerContext = createContext<TimerContextProps>({
  timers: initialTimers,
  addTimer: () => {},
});

interface TimerProviderProps {
  children?: React.ReactNode;
}

export const TimerProvider = ({ children }: TimerProviderProps) => {
  const [timers, setTimers] = useState<TimerProps[]>(() => {
    const cachedItems = localStorage.getItem("timers");
    if (!cachedItems) {
      return initialTimers;
    }

    const parsedItems = JSON.parse(cachedItems);

    if (!parsedItems) {
      return initialTimers;
    }

    return parsedItems;
  });

  useEffect(() => {
    localStorage.setItem("timers", JSON.stringify(timers));
  }, [timers]);

  const addTimer = useCallback(
    (timer: TimerProps) =>
      setTimers((timers) =>
        [...timers, timer].sort((a, b) => {
          return a.timeMin - b.timeMin;
        })
      ),
    []
  );

  return (
    <TimerContext.Provider value={{ timers, addTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
