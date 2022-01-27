import { render } from "@testing-library/react";
import Component from ".";

const setup = () => render(<Component />);

test("renders successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});
