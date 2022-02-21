import styles from "./styles.module.css";

export interface Props {
  label: string;
  onClick?: () => void;
}

export default ({ label, onClick }: Props) => (
  <button className={styles.component} children={label} {...{ onClick }} />
);
