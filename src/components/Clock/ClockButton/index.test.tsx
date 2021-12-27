import { render, fireEvent } from "@testing-library/react";
import Component from ".";
import { ClockObject } from "../ClockObject";

const timeMin = 10;
const clock = new ClockObject(timeMin);
const onClick = jest.fn();
const isActive = false;

const setup = () => render(<Component {...{ clock, onClick, isActive }} />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

test("renders correct label", () => {
  const { getByText } = setup();
  const element = getByText(timeMin);

  expect(element).toBeInTheDocument();
});

describe("on touch start", () => {
  test("triggers callback call", () => {
    const { container } = setup();
    fireEvent.touchStart(container.getElementsByTagName("button")[0]);

    expect(onClick).toBeCalledTimes(1);
  });
});
