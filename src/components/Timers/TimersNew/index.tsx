import AccentButton from "components/AccentButton";
import Flex from "components/Flex";
import React, { useState } from "react";
import styles from "./styles.module.css";

export default () => {
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
    <Flex
      column
      justifyContentSpaceBetween
      className={styles.component}
      style={{ height: window.innerHeight }}
    >
      <Flex column gap={50}>
        {entries.map((entry) => (
          <React.Fragment key={entry.name}>
            <Entry {...entry} />
          </React.Fragment>
        ))}
      </Flex>
      <AccentButton label="SAVE" onClick={() => {}} />
    </Flex>
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

const Input = (props: InputProps) => {
  const [value, setValue] = useState(0);
  return (
    <input
      type="number"
      pattern="\d*"
      {...props}
      onChange={(evt) => {
        const number = parseInt(evt.target.value) || 0;
        debugger;
        if (number > props.max) {
          return;
        }

        setValue(number);
        console.log(number);
      }}
      value={String(value)}
    />
  );
};
