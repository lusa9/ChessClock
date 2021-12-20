interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => <div {...{ children }} />;
