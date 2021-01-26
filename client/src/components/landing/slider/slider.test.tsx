import React from "react";
import { render, RenderResult, fireEvent } from "@testing-library/react";

import Slider from "./slider.component";

let documentBody: RenderResult;
const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation(() => [null, setState]);

beforeEach(() => {
  documentBody = render(
    <Slider
      images={[]}
      dataTestIdLeft="test-left"
      dataTestIdRight="test-right"
    />
  );
});

test("Slider component, match snapshot", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Slider click left.", () => {
  const btn = documentBody.getByTestId("test-left");

  fireEvent.click(btn);

  expect(setState).toHaveBeenCalledWith(-1);
});

test("Slider test right.", () => {
  const btn = documentBody.getByTestId("test-right");

  fireEvent.click(btn);

  expect(setState).toHaveBeenCalledWith(1);
});
