import { render } from "@testing-library/react";
import Component from ".";

test("renders successfully", () => {
  const { baseElement: element } = render(
    <Component timeMin={3} incrementSec={2} onClick={jest.fn()} />
  );

  expect(element).toBeInTheDocument();
});

test("renders values in correct format", () => {
  const { getByText } = render(<Component timeMin={3} onClick={jest.fn()} />);
  const element = getByText("3");

  expect(element).toBeInTheDocument();
});

test("renders values with increment in correct format", () => {
  const { getByText } = render(
    <Component timeMin={3} incrementSec={2} onClick={jest.fn()} />
  );
  const element = getByText("3 | 2");

  expect(element).toBeInTheDocument();
});
