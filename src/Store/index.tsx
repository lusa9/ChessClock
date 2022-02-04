import { TimerProvider } from "./TimerProvider";

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => <TimerProvider {...{ children }} />;
