import styles from "./styles.module.css";

export interface PickTimerButtonProps {
  label: string;
  onClick: () => void;
}

export default ({ label, onClick }: PickTimerButtonProps) => (
  <button className={styles.component} children={label} {...{ onClick }} />
);
