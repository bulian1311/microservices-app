import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { render, RenderResult, fireEvent } from "@testing-library/react";
import useStore from "../../../hooks/use-store.hook";
import ShowMore from "./show-more.component";

let documentBody: RenderResult;
let storeHook = renderHook(() => useStore());

storeHook.result.current.productStore.setProducts([
  {
    id: "111",
    title: "Test product",
    description: "Test description",
    category: "test category",
    price: 123,
    url: "www",
    images: ["http://www."],
    specifications: '{"111": "qqq"}',
    producer: "{}",
    tags: "test tag",
    inCart: false,
  },
]);
storeHook.result.current.productStore.setIsDataOver(false);
storeHook.result.current.productStore.setIsPaginateFetching(false);

const fetchProductsSpy = jest.spyOn(
  storeHook.result.current.productStore,
  "fetchProducts"
);

beforeEach(() => {
  documentBody = render(<ShowMore dataTestId="show-more" />);
});

test("Show more component match snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
});

test("Show more button not render.", () => {
  storeHook.result.current.productStore.setIsDataOver(true);
  const btn = documentBody.queryByTestId("show-more");

  expect(btn).toBe(null);
});

test("Show more component, fetch data from server.", async () => {
  storeHook.result.current.productStore.setIsDataOver(false);
  const btn = documentBody.getByTestId("show-more");
  fireEvent.click(btn);

  expect(fetchProductsSpy).toBeCalled();
});
