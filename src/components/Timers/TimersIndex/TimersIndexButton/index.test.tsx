import { render, fireEvent } from "@testing-library/react";
import Component, { PickTimerButtonProps } from ".";

const timeMin = 3;
const incrementSec = 2;
const onClick = jest.fn();

const setup = (props: PickTimerButtonProps) => render(<Component {...props} />);

test("renders successfully", () => {
  const { baseElement: element } = setup({ timeMin, incrementSec, onClick });

  expect(element).toBeInTheDocument();
});

test("renders values in correct format", () => {
  const { getByText } = setup({ timeMin, onClick });
  const element = getByText("3");

  expect(element).toBeInTheDocument();
});

test("renders values with increment in correct format", () => {
  const { getByText } = setup({ timeMin, incrementSec, onClick });
  const element = getByText("3 | 2");

  expect(element).toBeInTheDocument();
});

describe("on click", () => {
  test("triggers callback call", () => {
    const { container } = setup({ timeMin, incrementSec, onClick });
    fireEvent.click(container.getElementsByTagName("button")[0]);

    expect(onClick).toBeCalledTimes(1);
  });
});
