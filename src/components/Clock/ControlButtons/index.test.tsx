import { render } from "@testing-library/react";
import Component from ".";

const onPauseButtonClick = jest.fn();
const onResetButtonClick = jest.fn();
const expired = false;

const setup = () =>
  render(
    <Component {...{ onPauseButtonClick, onResetButtonClick, expired }} />
  );

it("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});

it("renders pause button", () => {
  const { baseElement: element, container } = setup();

  expect(element).toBeInTheDocument();
});
