import RootStore from "./root.store";

const rootStore = new RootStore();

test("Cart store created with defaults.", () => {
  const cartStore = rootStore.cartStore;

  expect(cartStore.cartVisible).toBe(false);
  expect(cartStore.cartList).toStrictEqual([]);
  expect(cartStore.totalPrice).toBe(0);
});

test("set Cart Visible method.", () => {
  const cartStore = rootStore.cartStore;

  cartStore.setCartVisible(true);
  expect(cartStore.cartVisible).toBe(true);
});

test("add To Cart method.", () => {
  const cartStore = rootStore.cartStore;
  const productStore = rootStore.productStore;

  productStore.setProducts([
    {
      id: "test_id",
      title: "test title",
      description: "test description",
      price: 123,
      url: "test url",
      images: [""],
      category: "",
      tags: [],
      producer: "test producer",
      specifications: {},
      inCart: false,
    },
  ]);

  cartStore.addToCart("test_id");
  expect(cartStore.cartList.length).toBe(1);
  expect(cartStore.cartList[0].title).toBe("test title");
});

test("Delete from cart method.", () => {
  const cartStore = rootStore.cartStore;
  const productStore = rootStore.productStore;

  productStore.setProducts([
    {
      id: "test_id",
      title: "test title",
      description: "test description",
      price: 123,
      url: "test url",
      images: [""],
      category: "",
      tags: [],
      producer: "test producer",
      specifications: {},
      inCart: false,
    },
  ]);

  cartStore.addToCart("test_id");
  cartStore.addToCart("test_id");

  cartStore.deleteFromCart("test_id");
  expect(cartStore.cartList.length).toBe(1);
});

test("Clear cart method.", () => {
  const cartStore = rootStore.cartStore;
  const productStore = rootStore.productStore;

  productStore.setProducts([
    {
      id: "test_id",
      title: "test title",
      description: "test description",
      price: 123,
      url: "test url",
      images: [""],
      category: "",
      tags: [],
      producer: "test producer",
      specifications: {},
      inCart: false,
    },
  ]);

  cartStore.addToCart("test_id");
  cartStore.addToCart("test_id");
  cartStore.addToCart("test_id");

  cartStore.clearCart();
  expect(cartStore.cartList.length).toBe(0);
});
