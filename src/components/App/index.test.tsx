import { render } from "@testing-library/react";
import Component from ".";

const setup = () => render(<Component />);

it("renders  successfully", () => {
  const { baseElement: element } = setup();

  expect(element).toBeInTheDocument();
});
