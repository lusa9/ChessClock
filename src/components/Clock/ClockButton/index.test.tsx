import { render, fireEvent } from "@testing-library/react";
import Component from ".";
import { ClockObject } from "../ClockObject";

const timeMin = 10;
const incrementSec = 0;
const clock = new ClockObject(timeMin, incrementSec);
const onClick = jest.fn();
const isActive = false;
const expired = false;

const setup = () =>
  render(<Component {...{ clock, onClick, isActive, expired }} />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

test("renders correct label", () => {
  const { getByText } = setup();
  const element = getByText("10:00");

  expect(element).toBeInTheDocument();
});

describe("on touch start", () => {
  test("triggers callback call", () => {
    const { container } = setup();
    fireEvent.touchStart(container.getElementsByTagName("button")[0]);

    expect(onClick).toBeCalledTimes(1);
  });
});
