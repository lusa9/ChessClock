import { render, fireEvent } from "@testing-library/react";
import Component from ".";

const setup = () => render(<Component timeMin={10} incrementSec={0} />);

const clickClockButton = () => {
  const { getAllByText } = setup();
  const clocks = getAllByText("10:00");
  const clock = clocks[0];

  fireEvent.touchStart(clock);
};

const clickPauseButton = () => {
  const { getByAltText } = setup();
  const element = getByAltText("pause");

  fireEvent.click(element);
};

const clickResetButton = () => {
  const { getByAltText } = setup();
  const element = getByAltText("reset");

  fireEvent.click(element);
};

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

test("renders correct labels", () => {
  const { getAllByText } = setup();
  const elements = getAllByText("10:00");

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
  beforeAll(clickClockButton);

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

describe("on pause button click", () => {
  beforeAll(() => {
    clickClockButton();
    clickPauseButton();
  });

  it("renders reset button", () => {
    const { getByAltText } = setup();
    const element = getByAltText("reset");

    expect(element).toBeInTheDocument();
  });

  it("doesn't render pause button", () => {
    const { queryByAltText } = setup();
    const element = queryByAltText("pause");

    expect(element).toBeNull();
  });
});

describe("on reset button click", () => {
  beforeAll(() => {
    clickClockButton();
    clickPauseButton();
    clickResetButton();
  });

  it("doesn't render reset button", () => {
    const { queryByAltText } = setup();
    const element = queryByAltText("reset");

    expect(element).toBeNull();
  });

  it("doesn't render pause button", () => {
    const { queryByAltText } = setup();
    const element = queryByAltText("pause");

    expect(element).toBeNull();
  });
});
