import AccentButton from "components/AccentButton";
import Flex from "components/Flex";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TimerContext } from "Store/TimerProvider";
import styles from "./styles.module.css";

export default () => {
  const { addTimer } = useContext(TimerContext);
  const navigate = useNavigate();

  const [minutes, setMinutes] = useState(0);
  const [incrementSeconds, setIncrementSeconds] = useState(0);

  const entries: EntryProps[] = [
    {
      name: "TIME (MIN)",
      value: minutes,
      onChange: setMinutes,
      min: 1,
      max: 999,
      autoFocus: true,
    },
    {
      name: "INCREMENT (SEC)",
      value: incrementSeconds,
      onChange: setIncrementSeconds,
      min: 0,
      max: 30,
    },
  ];

  return (
    <form
      className={styles.component}
      style={{ height: window.innerHeight }}
      onSubmit={(evt) => {
        evt.preventDefault();
        addTimer({ timeMin: minutes, incrementSec: incrementSeconds });
        navigate("/timers");
      }}
    >
      <Flex column gap={50}>
        {entries.map((entry) => (
          <React.Fragment key={entry.name}>
            <Entry {...entry} />
          </React.Fragment>
        ))}
      </Flex>
      <AccentButton label="SAVE" />
    </form>
  );
};

interface EntryProps extends InputProps {
  name: string;
}

const Entry = ({ name, ...inputProps }: EntryProps) => (
  <Flex column gap={12}>
    <label>
      <h3>{name}</h3>
    </label>

    <Input {...inputProps} />
  </Flex>
);

interface InputProps {
  autoFocus?: boolean;
  min: number;
  max: number;
  value: number;
  onChange: (newValue: number) => void;
}

const Input = ({ value, onChange, min, max, autoFocus }: InputProps) => (
  <input
    type="number"
    pattern="\d*"
    onChange={(evt) => {
      const number = parseInt(evt.target.value) || 0;
      if (number > max) {
        return;
      }

      onChange(number);
    }}
    value={String(value)}
    {...{ min, autoFocus }}
  />
);
