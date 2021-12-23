import { render, fireEvent } from "@testing-library/react";
import Component, { PickTimerButtonProps } from ".";

const label = "3 | 2";
const onClick = jest.fn();

const setup = (props: PickTimerButtonProps) => render(<Component {...props} />);

test("renders successfully", () => {
  const { baseElement: element } = setup({ label, onClick });

  expect(element).toBeInTheDocument();
});

test("renders label", () => {
  const { getByText } = setup({ label, onClick });
  const element = getByText(label);

  expect(element).toBeInTheDocument();
});

describe("on click", () => {
  test("triggers callback call", () => {
    const { container } = setup({ label, onClick });
    fireEvent.click(container.getElementsByTagName("button")[0]);

    expect(onClick).toBeCalledTimes(1);
  });
});
