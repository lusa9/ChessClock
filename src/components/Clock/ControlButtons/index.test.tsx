import { render } from "@testing-library/react";
import Component from ".";

const onPauseButtonClick = jest.fn();
const onResetButtonClick = jest.fn();
const paused = false;
const isNewGame = false;
const expired = false;

interface SetupProps {
  paused?: boolean;
  isNewGame?: boolean;
  expired?: boolean;
}

const setup = (props?: SetupProps) =>
  render(
    <Component
      {...{
        onPauseButtonClick,
        onResetButtonClick,
        paused,
        isNewGame,
        expired,
      }}
      {...props}
    />
  );

it("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

it("renders pause button", () => {
  const { getByAltText } = setup();

  const element = getByAltText("pause");

  expect(element).toBeInTheDocument();
});

it("doesnt' render reset button", () => {
  const { queryByAltText } = setup();

  const element = queryByAltText("reset");

  expect(element).toBeNull();
});

describe("on a new game", () => {
  it("doesn't render", () => {
    const { container } = setup({ isNewGame: true });

    expect(container.hasChildNodes()).toBeFalsy();
  });
});

describe("on pause", () => {
  it("doesn't render pause button", () => {
    const { queryByAltText } = setup({ paused: true });

    const element = queryByAltText("pause");

    expect(element).toBeNull();
  });

  it("renders reset button", () => {
    const { getByAltText } = setup({ paused: true });

    const element = getByAltText("reset");

    expect(element).toBeInTheDocument();
  });
});

describe("on expiry", () => {
  it("doesn't render pause button", () => {
    const { queryByAltText } = setup({ expired: true });

    const element = queryByAltText("pause");

    expect(element).toBeNull();
  });

  it("renders reset button", () => {
    const { getByAltText } = setup({ expired: true });

    const element = getByAltText("reset");

    expect(element).toBeInTheDocument();
  });
});
