import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { TextArea } from "./textarea.styles";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<TextArea />);
});

test("TextArea matces snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});
