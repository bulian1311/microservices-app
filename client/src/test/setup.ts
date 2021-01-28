import "@testing-library/jest-dom";

beforeEach(async () => {
  jest.clearAllMocks();
});

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });
