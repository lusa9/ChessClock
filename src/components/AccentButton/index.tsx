import styles from "./styles.module.css";

export interface Props {
  name: string;
  onClick: () => void;
}

export default ({ name, onClick }: Props) => (
  <button className={styles.component} children={name} {...{ onClick }} />
);
