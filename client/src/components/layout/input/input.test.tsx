import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { Input } from "./input.styles";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<Input />);
});

test("TextArea matces snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});
