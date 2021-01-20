import RootStore from "./root.store";
import * as api from "../api";

jest.mock("../api", () => {
  return {
    fetchCategories: jest.fn().mockResolvedValue([
      {
        id: 1,
        name: "test",
      },
    ]),
  };
});

let rootStore: RootStore;

beforeEach(() => {
  rootStore = new RootStore();
});

test("Categories store created with defaults.", () => {
  const categoryStore = rootStore.categoryStore;

  expect(categoryStore.categoryVisible).toBe(false);
  expect(categoryStore.categoriesMap).toBeDefined();
});

test("Set category visible method.", () => {
  const categoryStore = rootStore.categoryStore;

  categoryStore.setCategoryVisible(true);
  expect(categoryStore.categoryVisible).toBe(true);
});

test("Parse categories method.", () => {
  const categoryStore = rootStore.categoryStore;

  categoryStore.parseCategories([{ id: "123", name: "test" }]);

  expect(categoryStore.categoriesMap.size).toBe(1);
  expect(categoryStore.categoriesMap.get("t")).toStrictEqual(["test"]);
});

test("Fetch categories method, request.", async () => {
  const categoryStore = rootStore.categoryStore;

  await categoryStore.fetchCategories();

  expect(api.fetchCategories).toBeCalled();
  expect(categoryStore.categoriesMap).toBeDefined();
  expect(categoryStore.categoriesMap.get("t")).toStrictEqual(["test"]);
  expect(categoryStore.categoriesMap.size).toBe(1);
});
