import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import Radio from "./radio.component";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(
    <Radio
      value="test"
      label="test label"
      checked
      handleSelectChange={() => {}}
    />
  );
});

test("Radio matces snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Show label.", () => {
  expect(documentBody.getByText("test label")).toBeInTheDocument();
});

test("Radio checked.", () => {
  const { getByTestId } = render(
    <form>
      <Radio
        testId="test1"
        value="test1"
        label="label1"
        checked={true}
        handleSelectChange={() => {}}
      />
      <Radio
        testId="test2"
        value="test2"
        label="label2"
        checked={false}
        handleSelectChange={() => {}}
      />
    </form>
  );

  const radio1 = getByTestId("test1") as HTMLInputElement;
  const radio2 = getByTestId("test2") as HTMLInputElement;

  expect(radio1).toBeChecked();
  expect(radio2).not.toBeChecked();
});
