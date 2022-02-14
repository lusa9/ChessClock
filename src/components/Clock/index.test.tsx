import { render, fireEvent } from "@testing-library/react";
import Component from ".";

const timeMin = 15;
const incrementSec = 10;

const setup = () => render(<Component {...{ timeMin, incrementSec }} />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

test("renders correct labels", () => {
  const { getAllByText } = setup();
  const elements = getAllByText("15:00");

  expect(elements.length).toBe(2);
});

it("doesn't render pause button", () => {
  const { queryByAltText } = setup();

  const element = queryByAltText("pause");

  expect(element).toBeNull();
});

it("doesnt' render reset button", () => {
  const { queryByAltText } = setup();

  const element = queryByAltText("reset");

  expect(element).toBeNull();
});

describe("on clock button click", () => {
  beforeEach(() => {
    const { getAllByText } = setup();
    const clocks = getAllByText("15:00");
    const clock = clocks[0];

    fireEvent.touchStart(clock);
  });

  it("renders pause button", async () => {
    const { getByAltText } = setup();
    const element = getByAltText("pause");

    expect(element).toBeInTheDocument();
  });

  it("doesn't render reset button", async () => {
    const { queryByAltText } = setup();
    const element = queryByAltText("reset");

    expect(element).toBeNull();
  });
});
