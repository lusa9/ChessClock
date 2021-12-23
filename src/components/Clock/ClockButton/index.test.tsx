import { render, fireEvent } from "@testing-library/react";
import Component from ".";

const label = "Button label";
const onClick = jest.fn();

const setup = () => render(<Component {...{ label, onClick }} />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

test("renders correct label", () => {
  const { getByText } = setup();
  const element = getByText(label);

  expect(element).toBeInTheDocument();
});

describe("on click", () => {
  test("triggers callback call", () => {
    const { container } = setup();
    fireEvent.click(container.getElementsByTagName("button")[0]);

    expect(onClick).toBeCalledTimes(1);
  });
});
