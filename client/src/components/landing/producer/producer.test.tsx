import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, fireEvent } from "@testing-library/react";
import useStore from "../../../hooks/use-store.hook";
import Producer from "./producer.component";

let storeHook = renderHook(() => useStore());

const fetchProductsSpy = jest.spyOn(
  storeHook.result.current.productStore,
  "fetchProducts"
);

const setSearchQuerySpy = jest.spyOn(
  storeHook.result.current.filterStore,
  "setSearchQuery"
);

test("Producer component, onClick event.", () => {
  const documentBody = render(<Producer producer="party2go" />);
  const elem = documentBody.getByTestId("producer");

  fireEvent.click(elem);

  expect(setSearchQuerySpy).toBeCalled();
  expect(fetchProductsSpy).toBeCalled();
});

test("Producer match Snapshot 1.", () => {
  const { baseElement } = render(<Producer producer="party2go" />);
  expect(baseElement).toMatchSnapshot();
});

test("Producer match Snapshot 2.", () => {
  const { baseElement } = render(<Producer producer="arenda-attrakcionov" />);
  expect(baseElement).toMatchSnapshot();
});

test("Producer match Snapshot 3.", () => {
  const { baseElement } = render(<Producer producer="batutvarendu" />);
  expect(baseElement).toMatchSnapshot();
});

test("Producer match Snapshot 4.", () => {
  const { baseElement } = render(<Producer producer="eventomania" />);
  expect(baseElement).toMatchSnapshot();
});

test("Producer match Snapshot 5.", () => {
  const { baseElement } = render(<Producer producer="funevents" />);
  expect(baseElement).toMatchSnapshot();
});

test("Producer match Snapshot 6.", () => {
  const { baseElement } = render(<Producer producer="pro-interactive" />);
  expect(baseElement).toMatchSnapshot();
});
