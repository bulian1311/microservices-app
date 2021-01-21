import * as React from "react";
import { render } from "@testing-library/react";
import { Container } from "./container.styles";

test("TextArea matces snapshot.", () => {
  const { baseElement } = render(<Container />);
  expect(baseElement).toMatchSnapshot();
});
