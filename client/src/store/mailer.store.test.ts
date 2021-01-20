import RootStore from "./root.store";
import * as api from "../api";

jest.mock("../api", () => {
  return {
    sendMessage: jest.fn().mockResolvedValue({
      msg: "success",
    }),
    sendCart: jest.fn().mockResolvedValue({
      msg: "success",
    }),
  };
});

let rootStore: RootStore;

beforeEach(() => {
  rootStore = new RootStore();
});

test("Mailer store created with defaults.", () => {
  const mailerStore = rootStore.mailerStore;

  expect(mailerStore.isMailSended).toBe(false);
  expect(mailerStore.errorMessage).toBe(null);
  expect(mailerStore.name).toBe("");
  expect(mailerStore.phone).toBe("");
  expect(mailerStore.email).toBe("");
  expect(mailerStore.message).toBe("");
  expect(mailerStore.prefer).toBe("phone");
  expect(mailerStore.date).toBe("");
  expect(mailerStore.address).toBe("");
});

test("Set value method.", () => {
  const mailerStore = rootStore.mailerStore;

  mailerStore.setValue("name", "test name");
  expect(mailerStore.name).toBe("test name");

  mailerStore.setValue("message", "test message");
  expect(mailerStore.message).toBe("test message");
});

test("Clear form method.", () => {
  const mailerStore = rootStore.mailerStore;

  mailerStore.setValue("name", "test name");
  mailerStore.setValue("message", "test message");
  mailerStore.setValue("phone", "123");

  mailerStore.clearForm();

  expect(mailerStore.name).toBe("");
  expect(mailerStore.message).toBe("");
  expect(mailerStore.phone).toBe("");
});

test("Send message method.", () => {
  const mailerStore = rootStore.mailerStore;

  mailerStore.sendMessage();

  expect(api.sendMessage).toBeCalled();
});

test("Send cart method.", () => {
  const mailerStore = rootStore.mailerStore;

  mailerStore.sendCart();

  expect(api.sendCart).toBeCalled();
});
