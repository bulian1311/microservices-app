import * as React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import Button from "./button.component";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<Button>Test button</Button>);
});

test("Button matces snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Button inner text.", () => {
  expect(documentBody.getByText("Test button")).toBeInTheDocument();
});

test("Button on click event.", () => {
  let str: string = "";

  const { getByTestId } = render(
    <Button testId="btn" onClick={() => (str = "btn")}>
      Test button
    </Button>
  );

  const btn = getByTestId("btn");

  fireEvent.click(btn);

  expect(str).toBe("btn");
});
