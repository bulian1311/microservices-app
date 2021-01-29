import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Notification from "./notification.component";

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(
    <Notification
      timer={200}
      notification={{ id: "1", title: "Test", img: "" }}
    />
  );
});

test("Notification component match snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Notification component unmount.", () => {
  documentBody.getByTestId("notification");

  setTimeout(() => {
    expect(documentBody.queryByTestId("notification")).toBeNull();
  }, 300);
});
