import RootStore from "./root.store";
import * as api from "../api";

jest.mock("../api", () => {
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

let rootStore: RootStore;

beforeEach(() => {
  rootStore = new RootStore();
});

test("Products store created with defaults.", () => {
  const productStore = rootStore.productStore;

  expect(productStore.products).toStrictEqual([]);
  expect(productStore.count).toBe(0);
  expect(productStore.isFetching).toBe(false);
  expect(productStore.isPaginateFetching).toBe(false);
  expect(productStore.isDataOver).toBe(false);
});

test("Parse product method", () => {
  const productStore = rootStore.productStore;

  const products = productStore.parseProducts([
    {
      id: 111,
      title: "Test product",
      description: "Test description",
      category: "test category",
      price: 123,
      url: "www",
      images: '["www"]',
      specifications: '{"111": "qqq"}',
      producer: "{}",
      tags: "test tag",
    },
  ]);

  expect(products[0].images.length).toBe(1);
  expect(products[0].images[0]).toBe("www");
  expect(products[0].specifications).toStrictEqual({ 111: "qqq" });
});

test("Set product method.", () => {
  const productStore = rootStore.productStore;

  productStore.setProducts([
    {
      id: "qwer",
      title: "Test product",
      description: "Test description",
      category: "test category",
      price: 123,
      url: "www",
      images: ["www"],
      specifications: { 111: "qqq" },
      producer: {},
      tags: "test tag",
      inCart: false,
    },
  ]);

  expect(productStore.products.length).toBe(1);
  expect(productStore.products[0].id).toBe("qwer");
});

test("Set is data over method.", () => {
  const productStore = rootStore.productStore;
  expect(productStore.isDataOver).toBe(false);
  productStore.setIsDataOver(true);
  expect(productStore.isDataOver).toBe(true);
});

test("Set count method.", () => {
  const productStore = rootStore.productStore;
  productStore.setCount(7);
  expect(productStore.count).toBe(7);
});

test("Fetch products method.", async () => {
  const productStore = rootStore.productStore;

  await productStore.fetchProducts(false);

  expect(api.fetchProducts).toBeCalled();
  expect(productStore.products.length).toBe(1);
  expect(productStore.products[0].title).toBe("Test product");
});
