import RootStore from "./root.store";

let rootStore = new RootStore();

beforeEach(() => {
  rootStore = new RootStore();
});

test("Notifications store created with defaults.", () => {
  const notificationsStore = rootStore.notificationsStore;

  expect(notificationsStore.notifications).toStrictEqual([]);
});

test("Set notification method.", () => {
  const notificationsStore = rootStore.notificationsStore;

  notificationsStore.setNotification({ img: "123", title: "123" });

  expect(notificationsStore.notifications.length).toBe(1);
  expect(notificationsStore.notifications[0].title).toBe("123");
});

test("Delete notification method.", () => {
  const notificationsStore = rootStore.notificationsStore;

  notificationsStore.setNotification({ img: "123", title: "123" });
  notificationsStore.setNotification({ img: "456", title: "456" });

  expect(notificationsStore.notifications.length).toBe(2);

  notificationsStore.deleteNotification(notificationsStore.notifications[0].id);

  expect(notificationsStore.notifications.length).toBe(1);
  expect(notificationsStore.notifications[0].title).toBe("456");
});
