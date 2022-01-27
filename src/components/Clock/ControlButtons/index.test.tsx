import { render } from "@testing-library/react";
import Component from ".";

const onPauseButtonClick = jest.fn();
const onResetButtonClick = jest.fn();

const setup = () =>
  render(<Component {...{ onPauseButtonClick, onResetButtonClick }} />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});
