import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Slogan from "./slogan.component";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<Slogan mainText="Test" subText="test" />);
});

it("shows not found message", () => {
  expect(documentBody.getByText("Test")).toBeInTheDocument();
  expect(documentBody.getByText("test")).toBeInTheDocument();
});
