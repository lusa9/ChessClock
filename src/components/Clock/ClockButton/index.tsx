import Flex from "components/Flex";

interface Props {
  label: string;
  onClick: () => void;
}
export default ({ label, onClick }: Props) => (
  <button {...{ onClick }}>
    <Flex justifyContentCenter alignItemsCenter>
      <h1>{label}</h1>
    </Flex>
  </button>
);
