import RootStore from "./root.store";

test("Root store created with defaults.", () => {
  const rootStore = new RootStore();

  expect(rootStore.cartStore).toBeDefined();
  expect(rootStore.categoryStore).toBeDefined();
  expect(rootStore.filterStore).toBeDefined();
  expect(rootStore.mailerStore).toBeDefined();
  expect(rootStore.notificationsStore).toBeDefined();
  expect(rootStore.productStore).toBeDefined();
});
