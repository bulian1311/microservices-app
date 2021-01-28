import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import useStore from "../../../hooks/use-store.hook";
import Search from "./search.component";

let documentBody: RenderResult;
let storeHook = renderHook(() => useStore());

const fetchProductsSpy = jest.spyOn(
  storeHook.result.current.productStore,
  "fetchProducts"
);

const setSearchQuerySpy = jest.spyOn(
  storeHook.result.current.filterStore,
  "setSearchQuery"
);

beforeEach(() => {
  documentBody = render(<Search />);
});

test("Search component match snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Search component onChange event.", () => {
  const searchInput = documentBody.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "a" } });

  expect(setSearchQuerySpy).toBeCalled();
  expect(fetchProductsSpy).toBeCalled();
});

test("Search component, click to the cross icon.", () => {
  const crossIcon = documentBody.getByTestId("cross-icon");
  fireEvent.click(crossIcon);

  expect(setSearchQuerySpy).toBeCalled();
  expect(fetchProductsSpy).toBeCalled();
});

test("Search component, click to the example text.", () => {
  const ul = documentBody.getByTestId("example-ul");
  fireEvent.click(ul.firstChild!);

  expect(setSearchQuerySpy).toBeCalled();
  expect(fetchProductsSpy).toBeCalled();
});
