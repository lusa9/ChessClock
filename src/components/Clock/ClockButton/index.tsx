import Flex from "components/Flex";
import styles from "./styles.module.css";

export interface ClockButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}
export default ({ label, onClick, isActive }: ClockButtonProps) => (
  <button
    onTouchStart={onClick}
    {...(isActive && { className: styles.active })}
  >
    <Flex justifyContentCenter alignItemsCenter>
      <h1>{label}</h1>
    </Flex>
  </button>
);
