import FilterStore from "./filter.store";
import RootStore from "./root.store";

const filterStore = new FilterStore(new RootStore());

test("Filter store created with defaults.", () => {
  expect(filterStore.searchQuery).toBe("");
  expect(filterStore.limit).toBe(12);
  expect(filterStore.orderBy).toBe("id");
  expect(filterStore.order).toBe("ASC");
});

test("Set searchQuery.", () => {
  filterStore.setSearchQuery("TestQ");

  expect(filterStore.searchQuery).toBe("TestQ");
});
