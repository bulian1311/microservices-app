import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Block from "./block.component";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<Block>Test block</Block>);
});

test("Block matces snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Block render child.", () => {
  expect(documentBody.getByText("Test block")).toBeInTheDocument();
});
