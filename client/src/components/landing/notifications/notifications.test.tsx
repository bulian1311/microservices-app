import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Notifications from "./notifications.component";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<Notifications />);
});

test("Notifications component match snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});
