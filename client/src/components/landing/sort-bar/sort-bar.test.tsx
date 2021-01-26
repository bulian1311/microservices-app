import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useStore from "../../../hooks/use-store.hook";

import SortBar from "./sort-bar.component";

jest.mock("../../../api", () => {
  return {
    fetchProducts: jest.fn().mockResolvedValue({
      count: 1,
      products: [
        {
          id: 111,
          title: "Test product",
          description: "Test description",
          category: "test category",
          price: 123,
          url: "www",
          images: '["http://www."]',
          specifications: '{"111": "qqq"}',
          producer: "{}",
          tags: "test tag",
        },
      ],
    }),
  };
});

let storeHook = renderHook(() => useStore());

let documentBody: RenderResult;

beforeEach(() => {
  documentBody = render(<SortBar />);
  storeHook = renderHook(() => useStore());
});

test("Sort component, matches snapshot.", () => {
  const { baseElement } = documentBody;
  expect(baseElement).toMatchSnapshot();
  expect(documentBody.getByText("сортировать")).toBeInTheDocument();
});

test("Sort component rerender, and show product count for store.", async () => {
  await storeHook.result.current.productStore.fetchProducts(false);

  expect(documentBody.getByText("Всего аттракционов: 1")).toBeInTheDocument();
});
