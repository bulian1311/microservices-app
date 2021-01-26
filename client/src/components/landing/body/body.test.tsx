import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useStore from "../../../hooks/use-store.hook";

import Body from "./body.component";

let storeHook = renderHook(() => useStore());

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<Body />);
  storeHook = renderHook(() => useStore());
});

test("Body component, default render,", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
  expect(documentBody.getByText("Находить а не искать")).toBeInTheDocument();
});

test("Body component, category rerender,", () => {
  storeHook.result.current.categoryStore.setCategoryVisible(true);
  storeHook.result.current.cartStore.setCartVisible(false);

  expect(documentBody.getByText("каталог категорий")).toBeInTheDocument();
});

test("Body component, cart rerender,", () => {
  storeHook.result.current.cartStore.setCartVisible(true);
  storeHook.result.current.categoryStore.setCategoryVisible(false);

  expect(documentBody.getByText("Корзина заказов")).toBeInTheDocument();
});
