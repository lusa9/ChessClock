import { render } from "@testing-library/react";
import Component from ".";

const onPauseButtonClick = jest.fn();
const onResetButtonClick = jest.fn();
const expired = false;

interface SetupProps {
  expired?: boolean;
}

const setup = (props?: SetupProps) =>
  render(
    <Component
      {...{ onPauseButtonClick, onResetButtonClick, expired }}
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

it("renders reset button", () => {
  const { getByAltText } = setup();

  const element = getByAltText("reset");

  expect(element).toBeInTheDocument();
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
